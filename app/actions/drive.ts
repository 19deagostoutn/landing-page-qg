'use server';

import { google } from 'googleapis';

export async function getGoogleDriveFolders(driveLink: string) {
  try {
    const match = driveLink.match(/\/folders\/([a-zA-Z0-9_-]+)/);
    
    if (!match || !match[1]) {
      return { error: 'Link de Drive inválido o no reconocido.' };
    }
    
    const folderId = match[1];
    
    console.log(`[Drive API] Intentando acceder a Google Drive con folderId: "${folderId}"`);

    if (!process.env.GOOGLE_CLIENT_EMAIL || !process.env.GOOGLE_PRIVATE_KEY) {
      return { error: 'Las credenciales de configuración del servidor backend (Service Account) están ausentes.' };
    }

    // El JSON almacena las nuevas líneas literales ' 'n' en lugar de saltos
    const privateKey = process.env.GOOGLE_PRIVATE_KEY.replace(/\\n/g, '\n');

    const auth = new google.auth.GoogleAuth({
      credentials: {
        client_email: process.env.GOOGLE_CLIENT_EMAIL,
        private_key: privateKey,
      },
      scopes: ['https://www.googleapis.com/auth/drive.readonly'],
    });

    const drive = google.drive({ version: 'v3', auth });

    // Para ver carpetas públicas aunque no estén directamente en el Drive de la Service Account,
    // buscamos por su parent ID usando "includeItemsFromAllDrives" y "supportsAllDrives".
    const response = await drive.files.list({
      q: `'${folderId}' in parents and mimeType='application/vnd.google-apps.folder' and trashed=false`,
      fields: 'files(id, name)',
      orderBy: 'name',
      includeItemsFromAllDrives: true,
      supportsAllDrives: true,
    });

    return { folders: response.data.files || [] };
  } catch (error: any) {
    console.error('Error conectando a Google Drive:', error);
    return { error: `La conexión con Drive falló: ${error.message}` };
  }
}
