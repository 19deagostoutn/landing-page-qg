const fs = require('fs');
const env = fs.readFileSync('.env.local', 'utf8');
const emailLine = env.split('\n').find(l => l.startsWith('GOOGLE_CLIENT_EMAIL='));
const keyLine = env.split('\n').find(l => l.startsWith('GOOGLE_PRIVATE_KEY='));
const client_email = emailLine.split('=')[1].trim();
const private_key = keyLine.split('="')[1].replace(/"$/, '').replace(/\\n/g, '\n');

const { google } = require('googleapis');
async function test() {
  const auth = new google.auth.GoogleAuth({
    credentials: { client_email, private_key },
    scopes: ['https://www.googleapis.com/auth/drive.readonly'],
  });
  const drive = google.drive({ version: 'v3', auth });
  
  const folderId = '1lzLm7SCWaTLGvGqrdsRpIZiaf_eRziFh'; // Algebra Let's use the ID the user has locally
  
  console.log('Testing Algebra folder: ', folderId);
  try {
    const file = await drive.files.get({ fileId: folderId, supportsAllDrives: true });
    console.log('[GET] Parent File Info:', file.data.name);
  } catch (e) {
    console.error('[GET] Failed to find parent:', e.message);
  }

  try {
    const response = await drive.files.list({
      q: `'${folderId}' in parents and mimeType='application/vnd.google-apps.folder' and trashed=false`,
      fields: 'files(id, name)',
      includeItemsFromAllDrives: true,
      supportsAllDrives: true,
    });
    console.log('[LIST] Files inside:', response.data.files);
  } catch (e) {
    console.error('[LIST] Failed to list:', e.message);
  }
}
test();
