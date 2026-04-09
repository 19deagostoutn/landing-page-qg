'use client';

import { useEffect, useState } from 'react';
import { Folder, Loader2, AlertCircle } from 'lucide-react';
import { getGoogleDriveFolders } from '@/app/actions/drive';

type DriveFolder = {
  id: string;
  name: string;
};

export function DriveFolderList({ driveLink }: { driveLink: string }) {
  const [folders, setFolders] = useState<DriveFolder[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    let isMounted = true;

    async function loadFolders() {
      if (driveLink === '#') {
        if (isMounted) {
          setFolders([{ id: 'mock1', name: 'Apuntes Teóricos' }, { id: 'mock2', name: 'Parciales Resueltos' }]);
          setLoading(false);
        }
        return;
      }

      const result = await getGoogleDriveFolders(driveLink);
      
      if (isMounted) {
        if (result.error) {
          setError(result.error);
        } else if (result.folders) {
          setFolders(result.folders);
        }
        setLoading(false);
      }
    }

    loadFolders();

    return () => {
      isMounted = false;
    };
  }, [driveLink]);

  if (loading) {
    return (
      <div className="p-4 sm:p-6 flex flex-col items-center justify-center text-secondary-500 gap-2 h-32">
        <Loader2 className="w-6 h-6 animate-spin" />
        <span className="text-sm">Buscando las carpetas actualizadas en Drive...</span>
      </div>
    );
  }

  if (error) {
    return (
      <div className="p-4 sm:p-6 flex flex-col items-center justify-center text-red-500 gap-2 h-32 text-center">
        <AlertCircle className="w-8 h-8 opacity-80" />
        <span className="text-sm font-medium">No se pudieron cargar las carpetas</span>
        <span className="text-xs text-red-400 max-w-sm">{error}</span>
        {error.includes('API Key') && (
           <span className="text-xs text-secondary-400 mt-2">Dile al Admin que configure la API Key en el panel.</span>
        )}
      </div>
    );
  }

  if (folders.length === 0) {
    return (
      <div className="p-4 sm:p-6 flex flex-col items-center justify-center text-secondary-400 gap-2 h-32 text-center">
        <Folder className="w-8 h-8 opacity-50" />
        <span className="text-sm font-medium text-secondary-500">Carpeta temporalmente vacía</span>
        <span className="text-xs text-secondary-400">Aún no hay subcarpetas creadas aquí en Google Drive.</span>
      </div>
    );
  }

  return (
    <div className="p-4 sm:p-6 grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4">
      {folders.map((folder) => (
        <a
          key={folder.id}
          href={`https://drive.google.com/drive/folders/${folder.id}?usp=drive_link`}
          target="_blank"
          rel="noopener noreferrer"
          className="group p-4 flex flex-col items-center justify-center text-center rounded-xl border border-secondary-200 hover:border-blue-300 hover:bg-blue-50/50 hover:shadow-md transition-all cursor-pointer h-full"
        >
          <Folder className="w-10 h-10 text-blue-500 mb-3 group-hover:scale-110 transition-transform" strokeWidth={1.5} />
          <h4 className="font-semibold text-secondary-800 text-sm mb-1 leading-tight group-hover:text-blue-700 transition-colors">
            {folder.name}
          </h4>
          <span className="text-xs text-secondary-400 font-medium group-hover:text-blue-500 transition-colors">
            Abrir carpeta
          </span>
        </a>
      ))}
    </div>
  );
}
