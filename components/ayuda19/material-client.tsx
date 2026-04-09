'use client'

import { useState, useMemo } from 'react'
import { Search, Folder, ExternalLink, Filter, ChevronDown } from 'lucide-react'
import { DriveFolderList } from './drive-folder-list'

type Materia = {
  id: string;
  name: string;
  category: 'homogenea' | 'especialidad' | 'electiva';
  year?: '1er año' | '2do año' | '3er año' | '4to año' | '5to año' | '6to año' | 'Electivas';
  carrera?: string; // Para indicar a qué carrera pertenece si es Específica o Electiva
  driveLink: string;
}

const ALL_MATERIAS: Materia[] = [
  // --- HOMOGÉNEAS ---
  { id: '1', name: 'Álgebra y Geometría Analítica', category: 'homogenea', year: '1er año', driveLink: 'https://drive.google.com/drive/folders/1lzLm7SCWaTLGvGqrdsRpIZiaf_eRziFh?usp=drive_link' },
  { id: '2', name: 'Análisis Matemático I', category: 'homogenea', year: '1er año', driveLink: 'https://drive.google.com/drive/folders/1sxGdyrpkMzieRDbe6z0tYAVq-fUsFggq?usp=drive_link' },
  { id: '3', name: 'Física I', category: 'homogenea', year: '1er año', driveLink: 'https://drive.google.com/drive/folders/1sxlbPPd1eXDizTyOskB11zmzm_ChU4v2?usp=drive_link' },
  { id: '4', name: 'Ingeniería y Sociedad', category: 'homogenea', year: '1er año', driveLink: 'https://drive.google.com/drive/folders/1TNHJ8yBBCyBiby_5CXx-yUuM_Rt4nr02?usp=drive_link' },
  { id: '5', name: 'Química General', category: 'homogenea', year: '1er año', driveLink: 'https://drive.google.com/drive/folders/1hwMqQ_4juifdHMXkOS5hTR9zzaYcucjP?usp=drive_link' },

  { id: '6', name: 'Análisis Matemático II', category: 'homogenea', year: '2do año', driveLink: 'https://drive.google.com/drive/folders/1ChgJVnBOHVn4pslovcdpyIncb6tKlRsl?usp=drive_link' },
  { id: '7', name: 'Física II', category: 'homogenea', year: '2do año', driveLink: 'https://drive.google.com/drive/folders/1KnCXgpkuZPfQdSRqUvFBYWfkO-BMxJiS?usp=drive_link' },
  { id: '8', name: 'Inglés I', category: 'homogenea', year: '2do año', driveLink: 'https://drive.google.com/drive/folders/1QYhdFA7DbkuWC-XpBWBvm88iNw1SG8LY?usp=drive_link' },
  { id: '9', name: 'Inglés II', category: 'homogenea', year: '2do año', driveLink: 'https://drive.google.com/drive/folders/1x8egul24LgieeJJe3bijxJ1ipE7ghZKx?usp=drive_link' },
  { id: '10', name: 'Probabilidad y Estadística', category: 'homogenea', year: '2do año', driveLink: 'https://drive.google.com/drive/folders/1g-dfN3sSB63eIQ7_gRo0Qz-s3GEqn00r?usp=drive_link' },

  { id: '11', name: 'Economía', category: 'homogenea', year: '3er año', driveLink: 'https://drive.google.com/drive/folders/1oACL0cePK84cNCCV1rA-LKgP-zponld9?usp=drive_link' },

  // --- ESPECÍFICAS / ELECTIVAS DE CIVIL ---
  { id: '100', name: 'Ingeniería Civil I', category: 'especialidad', year: '1er año', carrera: 'Civil', driveLink: 'https://drive.google.com/drive/folders/1Wsi9ECDlb_HVOD5WEgnKPBcYFkSHbL4Z?usp=drive_link' },
  { id: '101', name: 'Sistemas de Representación', category: 'especialidad', year: '1er año', carrera: 'Civil', driveLink: 'https://drive.google.com/drive/folders/1ltsk2UuuM3pYSwJIi-uWPjTvPaj-q5wU?usp=drive_link' },

  { id: '102', name: 'Estabilidad', category: 'especialidad', year: '2do año', carrera: 'Civil', driveLink: 'https://drive.google.com/drive/folders/1ZQ5S5MwV1ErOrrhFZl2kIdJmNAC78-Qf?usp=drive_link' },
  { id: '103', name: 'Ingeniería Civil II', category: 'especialidad', year: '2do año', carrera: 'Civil', driveLink: 'https://drive.google.com/drive/folders/1XYOCtEgUKM5tBNXzgiJhTmfM2DyZERrP?usp=drive_link' },
  { id: '104', name: 'Tecnología de los Materiales', category: 'especialidad', year: '2do año', carrera: 'Civil', driveLink: 'https://drive.google.com/drive/folders/1jMe45OPIEcPlXf8zpA5N-9P8aqnMwPj7?usp=drive_link' },

  { id: '105', name: 'Geotopografía', category: 'especialidad', year: '3er año', carrera: 'Civil', driveLink: 'https://drive.google.com/drive/folders/1tbHsP2PDt0gJElCzzl3sEZNekt4NeQVI?usp=drive_link' },
  { id: '106', name: 'Hidráulica General y Aplicada', category: 'especialidad', year: '3er año', carrera: 'Civil', driveLink: 'https://drive.google.com/drive/folders/1sNSimYCPFS0gKGdU43eLGtJ2kY7fuxLq?usp=drive_link' },
  { id: '107', name: 'Ingeniería Legal', category: 'especialidad', year: '3er año', carrera: 'Civil', driveLink: 'https://drive.google.com/drive/folders/11KLEigK1fRfba9o1RXjxW0dIjNcPHxHG?usp=drive_link' },
  { id: '108', name: 'Instalaciones Eléctricas y Acústicas', category: 'especialidad', year: '3er año', carrera: 'Civil', driveLink: 'https://drive.google.com/drive/folders/1xIxYzq9N6Bn90fTIJRzM7PeEkSgkFGmG?usp=drive_link' },
  { id: '109', name: 'Instalaciones Termomecánicas', category: 'especialidad', year: '3er año', carrera: 'Civil', driveLink: 'https://drive.google.com/drive/folders/177FLd3s031H6qiVYGlUcsGf3IRuaVuHA?usp=drive_link' },
  { id: '110', name: 'Resistencia de Materiales', category: 'especialidad', year: '3er año', carrera: 'Civil', driveLink: 'https://drive.google.com/drive/folders/1BhNBH88zf1C-PXIuuLDWAGPanzTdIgi6?usp=drive_link' },
  { id: '111', name: 'Tecnología de la Construcción', category: 'especialidad', year: '3er año', carrera: 'Civil', driveLink: 'https://drive.google.com/drive/folders/1Uq9NcZB6b8zTreE_zNenojH5qHoyK6gn?usp=drive_link' },
  { id: '112', name: 'Tecnología del Hormigón', category: 'especialidad', year: '3er año', carrera: 'Civil', driveLink: 'https://drive.google.com/drive/folders/1O-z5x4eQfXMdF5x9rqj1zBj60PBqDQnR?usp=drive_link' },

  { id: '113', name: 'Análisis Estructural I', category: 'especialidad', year: '4to año', carrera: 'Civil', driveLink: 'https://drive.google.com/drive/folders/1VzdV8oOQ-LfLNL1aKl3KEhi32m5Xm2_W?usp=drive_link' },
  { id: '114', name: 'Cálculo Avanzado', category: 'especialidad', year: '4to año', carrera: 'Civil', driveLink: 'https://drive.google.com/drive/folders/1wJu-BfLqg_jmHrEdAbVmH1CcYUVhX9VQ?usp=drive_link' },
  { id: '115', name: 'Diseño Arquitectónico, Planeamiento y Urbanismo', category: 'especialidad', year: '4to año', carrera: 'Civil', driveLink: 'https://drive.google.com/drive/folders/1FerTTXNAw8AjTbDrHql55V4f7dsXZjSa?usp=drive_link' },
  { id: '116', name: 'Estructuras de Hormigón', category: 'especialidad', year: '4to año', carrera: 'Civil', driveLink: 'https://drive.google.com/drive/folders/1X0-1HExT9tQ91mo_jllgeS3CNIpFasCm?usp=drive_link' },
  { id: '117', name: 'Geotecnia', category: 'especialidad', year: '4to año', carrera: 'Civil', driveLink: 'https://drive.google.com/drive/folders/1Kr689h5856zfhFKf8nm74ySU5-SrJ8fG?usp=drive_link' },
  { id: '118', name: 'Hidrología y Obras Hidráulicas', category: 'especialidad', year: '4to año', carrera: 'Civil', driveLink: 'https://drive.google.com/drive/folders/1dJXkToMECShrIVbdbKJB0wAZPBGw_aRC?usp=drive_link' },
  { id: '119', name: 'Instalaciones Sanitarias y de Gas', category: 'especialidad', year: '4to año', carrera: 'Civil', driveLink: 'https://drive.google.com/drive/folders/10Vyn1GB-M8Gff3LNSaiUSzpEKivUFghi?usp=drive_link' },
  { id: '120', name: 'Vías de Comunicación I', category: 'especialidad', year: '4to año', carrera: 'Civil', driveLink: 'https://drive.google.com/drive/folders/1BfWxy-YirKIOibZDPJ4eJ1EDcugJ1fTQ?usp=drive_link' },

  { id: '121', name: 'Análisis Estructural II', category: 'especialidad', year: '5to año', carrera: 'Civil', driveLink: 'https://drive.google.com/drive/folders/1WUnMHLz8SeirwV24vbfFwPfCaKiN1hn-?usp=drive_link' },
  { id: '122', name: 'Cimentaciones', category: 'especialidad', year: '5to año', carrera: 'Civil', driveLink: 'https://drive.google.com/drive/folders/1wZCC1JREcE83ZkkWYAOUqZUaByar4zx4?usp=drive_link' },
  { id: '123', name: 'Construcciones Metálicas y de Madera', category: 'especialidad', year: '5to año', carrera: 'Civil', driveLink: 'https://drive.google.com/drive/folders/1ukzz8_BRUJMBwT3XzfOprMl2HIzE0KcR?usp=drive_link' },
  { id: '124', name: 'Gestión Ambiental y Desarrollo Sustentable', category: 'especialidad', year: '5to año', carrera: 'Civil', driveLink: 'https://drive.google.com/drive/folders/1U-ibS4jRaxu6_B-G5z4MWFU9MzcNe5CF?usp=drive_link' },
  { id: '125', name: 'Ingeniería Sanitaria', category: 'especialidad', year: '5to año', carrera: 'Civil', driveLink: 'https://drive.google.com/drive/folders/1ixO5u_bIcsv_6GjvhtSOr5JkrUT-LIyE?usp=drive_link' },
  { id: '126', name: 'Organización y Conducción de Obras', category: 'especialidad', year: '5to año', carrera: 'Civil', driveLink: 'https://drive.google.com/drive/folders/1xmL8Viu0jTCu5bVXAOwG4JRNuv4v9Ebi?usp=drive_link' },
  { id: '127', name: 'Vías de Comunicación II', category: 'especialidad', year: '5to año', carrera: 'Civil', driveLink: 'https://drive.google.com/drive/folders/1F4790KgBc-oIhOZ64hl1nJnsZPIJm1GN?usp=drive_link' },
  { id: '128', name: 'Proyecto Final', category: 'especialidad', year: '5to año', carrera: 'Civil', driveLink: 'https://drive.google.com/drive/folders/1ndNKzd60rF7KBdD5T94LfdbgrmN9YHFT?usp=drive_link' },

  { id: '129', name: 'Aeropuertos', category: 'electiva', year: '6to año', carrera: 'Civil', driveLink: 'https://drive.google.com/drive/folders/11MmsPwJQPHXQUNy_WF9ZfbvQXscZyYdI?usp=drive_link' },
  { id: '130', name: 'Construcción de Carreteras', category: 'electiva', year: '6to año', carrera: 'Civil', driveLink: 'https://drive.google.com/drive/folders/1STEJl9Ggn1o_to-I246Jxr8bYqEkZqME?usp=drive_link' },
  { id: '131', name: 'Contaminación y Saneamiento', category: 'electiva', year: '6to año', carrera: 'Civil', driveLink: 'https://drive.google.com/drive/folders/16-30BD-vZY6qaj-DSNjXiJlzNdAdqicW?usp=drive_link' },
  { id: '132', name: 'Energías Renovables', category: 'electiva', year: '5to año', carrera: 'Civil', driveLink: 'https://drive.google.com/drive/folders/1FwjDTzTNxmdhXPYI1HUdmFSQkb7sYkiB?usp=drive_link' },
  { id: '133', name: 'Ferrocarriles', category: 'electiva', year: '5to año', carrera: 'Civil', driveLink: 'https://drive.google.com/drive/folders/1jG9Wx_9-ALJTtbfw3TxkBpskDki-rT1w?usp=drive_link' },
  { id: '134', name: 'Geología Aplicada', category: 'electiva', year: '5to año', carrera: 'Civil', driveLink: 'https://drive.google.com/drive/folders/1L0q-laKL6CxdAwLV93vTSEsj0iAcwvQm?usp=drive_link' },
  { id: '135', name: 'Gestión de Cuencas', category: 'electiva', year: '6to año', carrera: 'Civil', driveLink: 'https://drive.google.com/drive/folders/1O8eAiwSFB8BZTaMN_ibGhvrsvswZGnZv?usp=drive_link' },
  { id: '136', name: 'Gestión y Calidad del Agua', category: 'electiva', year: '6to año', carrera: 'Civil', driveLink: 'https://drive.google.com/drive/folders/1D4MZ9spJY3lZ0Rh0yxVoYz13qdF5s8Dp?usp=drive_link' },
  { id: '137', name: 'Planificación Urbana Sustentable', category: 'electiva', year: '5to año', carrera: 'Civil', driveLink: 'https://drive.google.com/drive/folders/1j-mUpusvPqYZOSDdaubTkLEuK4uaEya2?usp=drive_link' },
  { id: '138', name: 'Prefabricación', category: 'electiva', year: '5to año', carrera: 'Civil', driveLink: 'https://drive.google.com/drive/folders/11uSV0MaUKlhjkIrADAKX2sYT7xr_sbMt?usp=drive_link' },
  { id: '139', name: 'Presas y Centrales Hidroeléctricas', category: 'electiva', year: '5to año', carrera: 'Civil', driveLink: 'https://drive.google.com/drive/folders/1plFdyPEFyb0EYj61brqZKqwpzfa4fMXF?usp=drive_link' },
  { id: '140', name: 'Puertos y Vías Navegables', category: 'electiva', year: '5to año', carrera: 'Civil', driveLink: 'https://drive.google.com/drive/folders/1BPFqIIUqabVKevZcOrcsSqwM9cZc_lfU?usp=drive_link' },
  { id: '141', name: 'Túneles y Grandes Puentes', category: 'electiva', year: '6to año', carrera: 'Civil', driveLink: 'https://drive.google.com/drive/folders/1Jc71-JHxTrdpSCLHPkZ7y7R4YZALWtsg?usp=drive_link' },

  // --- MOCKS OTRAS CARRERAS ---
  { id: '200', name: 'Proyecto Final', category: 'especialidad', year: '6to año', carrera: 'Electrónica', driveLink: 'https://drive.google.com/open?id=1qwVDU76xP-oEfaZqVvAbwqyAa2ThT1b6' },
  { id: '201', name: 'Técnicas Digitales III', category: 'especialidad', year: '5to año', carrera: 'Electrónica', driveLink: 'https://drive.google.com/open?id=1pVXxexYY0MAZ0X7kI8iZGlNQk51gONay' },
  { id: '202', name: 'Tecnología Electrónica', category: 'especialidad', year: '5to año', carrera: 'Electrónica', driveLink: 'https://drive.google.com/open?id=1kTvONeuG1hPvKn9vsALfgrnmywSk62Zy' },
  { id: '203', name: 'Organización Industrial', category: 'especialidad', year: '5to año', carrera: 'Electrónica', driveLink: 'https://drive.google.com/open?id=1dvX6NBQjf7_MNAAifgYPXLXNEbi5Kd6B' },
  { id: '204', name: 'Sistemas de Control', category: 'especialidad', year: '5to año', carrera: 'Electrónica', driveLink: 'https://drive.google.com/open?id=1UgLF64r5G-GVAzLgK465cUNVb1tbwnlW' },
  { id: '205', name: 'Medidas Electrónicas II', category: 'especialidad', year: '5to año', carrera: 'Electrónica', driveLink: 'https://drive.google.com/open?id=1kMrCPscWKM21YFVzWMs-n-0eUn87roIJ' },
  { id: '206', name: 'Electrónica de Potencia', category: 'especialidad', year: '5to año', carrera: 'Electrónica', driveLink: 'https://drive.google.com/open?id=1Y7TSK82m2ko58pf5rCcRGDXhywkCkD9P' },
  { id: '207', name: 'Electrónica Aplicada III', category: 'especialidad', year: '5to año', carrera: 'Electrónica', driveLink: 'https://drive.google.com/open?id=19e4dRMcwldhaTxabX8914PVIy1-bfsmu' },
  { id: '208', name: 'Teoría de Circuitos II', category: 'especialidad', year: '4to año', carrera: 'Electrónica', driveLink: 'https://drive.google.com/open?id=1XF9R6V2D58smbkGxWbjaG9azE9nPi1Gn' },
  { id: '209', name: 'Técnicas Digitales II', category: 'especialidad', year: '4to año', carrera: 'Electrónica', driveLink: 'https://drive.google.com/open?id=1TCeLUVDR9Clq8ShNEGFtK1L4_BSuPoTM' },
  { id: '210', name: 'Sistemas de Comunicaciones', category: 'especialidad', year: '4to año', carrera: 'Electrónica', driveLink: 'https://drive.google.com/open?id=1ZbwUxPAk2Z2WOg__z6FMyNn9jl6Z_mIh' },
  { id: '211', name: 'Seguridad Higiene y Medio Ambiente', category: 'especialidad', year: '4to año', carrera: 'Electrónica', driveLink: 'https://drive.google.com/open?id=1pHnY6sCwz6X2Q0aclbcIAbXEXSW5kEWp' },
  { id: '212', name: 'Medidas Electrónicas I', category: 'especialidad', year: '4to año', carrera: 'Electrónica', driveLink: 'https://drive.google.com/open?id=1bV4lWUgPuT4xFxxqESQ2KMT1UwWVsd3U' },
  { id: '213', name: 'Máquinas e Instalaciones Eléctricas', category: 'especialidad', year: '4to año', carrera: 'Electrónica', driveLink: 'https://drive.google.com/open?id=1WtdHRYJvxOgD8cThMSeyBtpt1HaDV7kM' },
  { id: '214', name: 'Electrónica Aplicada II', category: 'especialidad', year: '4to año', carrera: 'Electrónica', driveLink: 'https://drive.google.com/open?id=1wfkLRfK6eF-eIMolozdwWxab_jDM8pzm' },
  { id: '215', name: 'Teoría de Circuitos I', category: 'especialidad', year: '3er año', carrera: 'Electrónica', driveLink: 'https://drive.google.com/open?id=1pzInu9cBT3O_7E6zAj8EYkCQFvN3x7J0' },
  { id: '216', name: 'Técnicas Digitales I', category: 'especialidad', year: '3er año', carrera: 'Electrónica', driveLink: 'https://drive.google.com/open?id=1cDMf2rNMupj7Q_jspIsUnxqlOBmj5jby' },
  { id: '217', name: 'Medios de Enlace', category: 'especialidad', year: '3er año', carrera: 'Electrónica', driveLink: 'https://drive.google.com/open?id=1b7YM0KaXJ-D6SFtx_I1x2FuaNUWb06xf' },
  { id: '218', name: 'Electrónica Aplicada I', category: 'especialidad', year: '3er año', carrera: 'Electrónica', driveLink: 'https://drive.google.com/open?id=1dRDNkM_E3zazBg2cn7FrKszag99kTJSn' },
  { id: '219', name: 'Dispositivos Electrónicos', category: 'especialidad', year: '3er año', carrera: 'Electrónica', driveLink: 'https://drive.google.com/open?id=1tiyTaB3--hskDkth3Qald_yGKU0uIJm8' },
  { id: '220', name: 'Análisis de Señales y Sistemas', category: 'especialidad', year: '3er año', carrera: 'Electrónica', driveLink: 'https://drive.google.com/open?id=1sDiIHzYIZmaNfCbC1qja2j6bWrXCEOYo' },
  { id: '221', name: 'Informática II', category: 'especialidad', year: '2do año', carrera: 'Electrónica', driveLink: 'https://drive.google.com/open?id=1inKgoD-W-vYLLgeqNJdUOj-oVP7xmCtn' },
  { id: '222', name: 'Física Electrónica', category: 'especialidad', year: '2do año', carrera: 'Electrónica', driveLink: 'https://drive.google.com/open?id=1CqDx0IbSquvhoNFVVyc-WpsD9fQ2naTb' },
  { id: '223', name: 'Informática I', category: 'especialidad', year: '1er año', carrera: 'Electrónica', driveLink: 'https://drive.google.com/open?id=12H1WJYN_LKzpqe63JXPZoi90df9p02ZU' },
  { id: '224', name: 'VOIP', category: 'electiva', year: '6to año', carrera: 'Electrónica', driveLink: 'https://drive.google.com/open?id=13XT3ZpuphDvo9iOdmAsaBOviCz8my49V' },
  { id: '225', name: 'Software Defined Radio', category: 'electiva', year: '6to año', carrera: 'Electrónica', driveLink: 'https://drive.google.com/open?id=1vvtfQdIEBNRidUvADc-cksbg0vop_fdD' },
  { id: '226', name: 'Sistemas Avanzados de Televisión y Técnicas Audiovisuales', category: 'electiva', year: '6to año', carrera: 'Electrónica', driveLink: 'https://drive.google.com/open?id=1_Qgjs1eoyFrmW-4vh361hiX8PeipuUM_' },
  { id: '227', name: 'Sistemas de Comunicaciones IIB', category: 'electiva', year: '6to año', carrera: 'Electrónica', driveLink: 'https://drive.google.com/open?id=1bXqzcIWeiKYqo2mFvwEKY-g2hB7FEsKs' },
  { id: '228', name: 'Redes LAN', category: 'electiva', year: '6to año', carrera: 'Electrónica', driveLink: 'https://drive.google.com/open?id=1a2EaVi0mM4ifQRgMtrF80u8ubEAiMGNy' },
  { id: '229', name: 'Protocolos de redes WAN', category: 'electiva', year: '6to año', carrera: 'Electrónica', driveLink: 'https://drive.google.com/open?id=1uKcvi67oP0aRNnceAJRVf9M6PKi4-C-_' },
  { id: '230', name: 'Introducción al Diseño de VLSI', category: 'electiva', year: '6to año', carrera: 'Electrónica', driveLink: 'https://drive.google.com/open?id=1P2gDtoPtSVFdBzKQiYk1Jjf9oUSN_FXW' },
  { id: '231', name: 'Optoelectrónica', category: 'electiva', year: '6to año', carrera: 'Electrónica', driveLink: 'https://drive.google.com/open?id=1vkJY226w1YEBXX7NhIxBrCJEp-whTGRg' },
  { id: '232', name: 'Introduccion al Diseño de Circuitos Impresos', category: 'electiva', year: '6to año', carrera: 'Electrónica', driveLink: 'https://drive.google.com/open?id=11QG0JEZi2HJ9mD3q7ZjbxjQDrYZPjJ_C' },
  { id: '233', name: 'Electrónica Industrial', category: 'electiva', year: '6to año', carrera: 'Electrónica', driveLink: 'https://drive.google.com/open?id=1WwxWaMBbxKiG91TlhCvTu38joT_Heo7E' },
  { id: '234', name: 'Base de Datos', category: 'electiva', year: '6to año', carrera: 'Electrónica', driveLink: 'https://drive.google.com/open?id=1IULD8pHNY3MmqipZg-wpBGCak4j_gmOj' },
  { id: '235', name: 'Electrónica Aplicada al Automotor', category: 'electiva', year: '6to año', carrera: 'Electrónica', driveLink: 'https://drive.google.com/open?id=1k-ij3PymFPOOqzCmola6Msao8Yg8PUJ3' },
  { id: '236', name: 'Avionica', category: 'electiva', year: '6to año', carrera: 'Electrónica', driveLink: 'https://drive.google.com/open?id=1bou-3VJEgfwBLem2SJvLLRfMM32Uamih' },
  { id: '300', name: 'Sistemas y Procesos de negocios', category: 'especialidad', year: '1er año', carrera: 'en Sistemas', driveLink: 'https://drive.google.com/open?id=1_5nwVdPhyHqyugeU4-FCdFX7W4VAMnOy&authuser=0' },
  { id: '301', name: 'Tecnología para la Automatización', category: 'especialidad', year: '4to año', carrera: 'en Sistemas', driveLink: 'https://drive.google.com/open?id=1AcMAjJPFUCmXx3Oc5yd7BvqSxfSoo4TR&authuser=0' },
  { id: '302', name: 'Sistemas Operativos', category: 'especialidad', year: '2do año', carrera: 'en Sistemas', driveLink: 'https://drive.google.com/open?id=167vnZP8KYx3cO4manZyL5APxlUtth8gn&authuser=0' },
  { id: '303', name: 'Sistemas de Gestión', category: 'especialidad', year: '5to año', carrera: 'en Sistemas', driveLink: 'https://drive.google.com/open?id=1CD8i3WcefSh3Stj33qptQXc1P_xNMJ6n&authuser=0' },
  { id: '304', name: 'Sintaxis y Semántica de Lenguajes', category: 'especialidad', year: '2do año', carrera: 'en Sistemas', driveLink: 'https://drive.google.com/open?id=1-th6BE1DlzCmZ_k0atRaIv9hzq2dhFu4&authuser=0' },
  { id: '305', name: 'Simulación', category: 'especialidad', year: '4to año', carrera: 'en Sistemas', driveLink: 'https://drive.google.com/open?id=1-_2cK_FG6-g2uKP7TpcOFclzP77oUR4v&authuser=0' },
  { id: '306', name: 'Seguridad en los Sistemas de Información', category: 'especialidad', year: '5to año', carrera: 'en Sistemas', driveLink: 'https://drive.google.com/open?id=15J1rAZfhNT4tl_4BH_iF44NabAtiAu4A&authuser=0' },
  { id: '307', name: 'Paradigmas de Programación', category: 'especialidad', year: '2do año', carrera: 'en Sistemas', driveLink: 'https://drive.google.com/open?id=12sfPY7RHWhUgp3lgufBKT1u-OsWxJ1lS&authuser=0' },
  { id: '308', name: 'Redes de Datos', category: 'especialidad', year: '3er año', carrera: 'en Sistemas', driveLink: 'https://drive.google.com/open?id=1G-8NWg-yAaiTXPC5hCW6WaJikUGBMIXj&authuser=0' },
  { id: '309', name: 'Logica y estructuras Discretas', category: 'especialidad', year: '1er año', carrera: 'en Sistemas', driveLink: 'https://drive.google.com/open?id=1wZfLkbrjWxzDnn68cE5Gj3hAiAOuJMwO&authuser=0' },
  { id: '310', name: 'Investigación Operativa', category: 'especialidad', year: '4to año', carrera: 'en Sistemas', driveLink: 'https://drive.google.com/open?id=1aQCRpzg9XfPbhsdbbwSqCo1Nv1ld0m-p&authuser=0' },
  { id: '311', name: 'Inteligencia Artificial', category: 'especialidad', year: '5to año', carrera: 'en Sistemas', driveLink: 'https://drive.google.com/open?id=1UFIqNPqiBa8T5ruU9Jx32rCmfawNX7kd&authuser=0' },
  { id: '312', name: 'Gestion Gerencial', category: 'especialidad', year: '5to año', carrera: 'en Sistemas', driveLink: 'https://drive.google.com/open?id=1EL2ut10iQ1sK016rXvNHXbzHaAxce55M&authuser=0' },
  { id: '313', name: 'Ingeniería y Calidad de SW', category: 'especialidad', year: '4to año', carrera: 'en Sistemas', driveLink: 'https://drive.google.com/open?id=1tS-cWsjvXIYSY2XkWaLqCpqWrs1fDacR&authuser=0' },
  { id: '314', name: 'Arquitectura de Computadoras', category: 'especialidad', year: '1er año', carrera: 'en Sistemas', driveLink: 'https://drive.google.com/open?id=1HcAlLGzFOGxjHBCSdEdOKs46cqt1Chwr&authuser=0' },
  { id: '315', name: 'Base de Datos', category: 'especialidad', year: '3er año', carrera: 'en Sistemas', driveLink: 'https://drive.google.com/open?id=1MjJKPNDH21riMD_OUauyT778bRKS_tcQ&authuser=0' },
  { id: '316', name: 'Ciencia de Datos', category: 'especialidad', year: '5to año', carrera: 'en Sistemas', driveLink: 'https://drive.google.com/open?id=1JXj49sF2VkSN47rm_SiJMM8jBB353wkI&authuser=0' },
  { id: '317', name: 'Comunicaciones de Datos', category: 'especialidad', year: '3er año', carrera: 'en Sistemas', driveLink: 'https://drive.google.com/open?id=1Dw3FqUDpumM15-FNFGtQQXqTcC1v4x2h&authuser=0' },
  { id: '318', name: 'Desarrollo de Software', category: 'especialidad', year: '3er año', carrera: 'en Sistemas', driveLink: 'https://drive.google.com/open?id=1oUe7C-H85wLWwW4vFSfmzcxgGLekqcZm&authuser=0' },
  { id: '319', name: 'Diseño de Sistemas', category: 'especialidad', year: '3er año', carrera: 'en Sistemas', driveLink: 'https://drive.google.com/open?id=164kh-GVBjd2sKmW_npLFYmW3KAtE8rO4&authuser=0' },
  { id: '320', name: 'Administración de Sistemas', category: 'especialidad', year: '4to año', carrera: 'en Sistemas', driveLink: 'https://drive.google.com/open?id=1k6qMICeGQZs1BxenOKxiHmNGUzpz4FcO&authuser=0' },
  { id: '321', name: 'Algoritmos', category: 'especialidad', year: '1er año', carrera: 'en Sistemas', driveLink: 'https://drive.google.com/open?id=1riXgC9LGx9PG_Iz0yOaCfbkox_BTMpmk&authuser=0' },
  { id: '322', name: 'Análisis de Sistemas', category: 'especialidad', year: '2do año', carrera: 'en Sistemas', driveLink: 'https://drive.google.com/open?id=1cM_CGNAyBhIkSsAyUNyiSM2bbrFGAis4&authuser=0' },
  { id: '323', name: 'Análisis Numérico', category: 'especialidad', year: '4to año', carrera: 'en Sistemas', driveLink: 'https://drive.google.com/open?id=1AsMVL9J8f7rMYlMlcoiYGVfXwKpxBuy2&authuser=0' },
  { id: '324', name: 'Ciberseguridad', category: 'electiva', year: 'N/A', carrera: 'en Sistemas', driveLink: 'https://drive.google.com/drive/folders/1s31t6DOYVbFIQBDJoDcJl57P0-YLSbix?usp=drive_link' },
  { id: '325', name: 'Gestión del Talento Humano', category: 'electiva', year: 'N/A', carrera: 'en Sistemas', driveLink: 'https://drive.google.com/drive/folders/1cdltBHY-rEENGwlRcJ3ldV5M2VxrBEyv?usp=drive_link' },
  { id: '326', name: 'Tecnologías avanzadas en redes', category: 'electiva', year: 'N/A', carrera: 'en Sistemas', driveLink: 'https://drive.google.com/drive/folders/1kTYuxqwfuH1rMU0-G_rSlJCQVvq5dkfN?usp=drive_link' },
  { id: '400', name: 'Diseño mecánico', category: 'especialidad', year: '3er año', carrera: 'Mecánica', driveLink: 'https://frbautneduar-my.sharepoint.com/personal/federizzo_frba_utn_edu_ar/_layouts/15/onedrive.aspx?csf=1&web=1&e=90pT53&CID=bbd8bd69%2D731e%2D4b1d%2Db70c%2D811c3f53fd06&id=%2Fpersonal%2Ffederizzo%5Ffrba%5Futn%5Fedu%5Far%2FDocuments%2F19%20de%20Agosto%20%2D%20Mec%C3%A1nica%2FMaterias%2FDise%C3%B1o%20Mec%C3%A1nico&FolderCTID=0x0120009F8D8CF09458C345A54B501D1C79B000&view=0' },
  { id: '401', name: 'Electrónica y Sistemas de Control', category: 'especialidad', year: '4to año', carrera: 'Mecánica', driveLink: 'https://frbautneduar-my.sharepoint.com/personal/federizzo_frba_utn_edu_ar/_layouts/15/onedrive.aspx?id=%2Fpersonal%2Ffederizzo%5Ffrba%5Futn%5Fedu%5Far%2FDocuments%2F19%20de%20Agosto%20%2D%20Mec%C3%A1nica%2FMaterias%2FElectr%C3%B3nica%20y%20Sistemas%20de%20Control&viewid=8fb571af%2D2ed7%2D424b%2D97fd%2Df9334449e687' },
  { id: '402', name: 'Electrotecnia y máquinas eléctricas', category: 'especialidad', year: '4to año', carrera: 'Mecánica', driveLink: 'https://frbautneduar-my.sharepoint.com/personal/federizzo_frba_utn_edu_ar/_layouts/15/onedrive.aspx?id=%2Fpersonal%2Ffederizzo%5Ffrba%5Futn%5Fedu%5Far%2FDocuments%2F19%20de%20Agosto%20%2D%20Mec%C3%A1nica%2FMaterias%2FElectrotecnia%20y%20M%C3%A1quinas%20El%C3%A9ctricas&viewid=8fb571af%2D2ed7%2D424b%2D97fd%2Df9334449e687' },
  { id: '403', name: 'Elementos de Máquinas', category: 'especialidad', year: '4to año', carrera: 'Mecánica', driveLink: 'https://frbautneduar-my.sharepoint.com/personal/federizzo_frba_utn_edu_ar/_layouts/15/onedrive.aspx?id=%2Fpersonal%2Ffederizzo%5Ffrba%5Futn%5Fedu%5Far%2FDocuments%2F19%20de%20Agosto%20%2D%20Mec%C3%A1nica%2FMaterias%2FElementos%20de%20M%C3%A1quinas&viewid=8fb571af%2D2ed7%2D424b%2D97fd%2Df9334449e687' },
  { id: '404', name: 'Estabilidad I', category: 'especialidad', year: '2do año', carrera: 'Mecánica', driveLink: 'https://frbautneduar-my.sharepoint.com/personal/federizzo_frba_utn_edu_ar/_layouts/15/onedrive.aspx?id=%2Fpersonal%2Ffederizzo%5Ffrba%5Futn%5Fedu%5Far%2FDocuments%2F19%20de%20Agosto%20%2D%20Mec%C3%A1nica%2FMaterias%2FEstabilidad%20I%20%28S23A%29&viewid=8fb571af%2D2ed7%2D424b%2D97fd%2Df9334449e687' },
  { id: '405', name: 'Estabilidad II', category: 'especialidad', year: '3er año', carrera: 'Mecánica', driveLink: 'https://frbautneduar-my.sharepoint.com/personal/federizzo_frba_utn_edu_ar/_layouts/15/onedrive.aspx?id=%2Fpersonal%2Ffederizzo%5Ffrba%5Futn%5Fedu%5Far%2FDocuments%2F19%20de%20Agosto%20%2D%20Mec%C3%A1nica%2FMaterias%2FEstabilidad%20II%20%28S23A%29&viewid=8fb571af%2D2ed7%2D424b%2D97fd%2Df9334449e687' },
  { id: '406', name: 'Estabilidad III', category: 'especialidad', year: '4to año', carrera: 'Mecánica', driveLink: 'https://frbautneduar-my.sharepoint.com/personal/federizzo_frba_utn_edu_ar/_layouts/15/onedrive.aspx?id=%2Fpersonal%2Ffederizzo%5Ffrba%5Futn%5Fedu%5Far%2FDocuments%2F19%20de%20Agosto%20%2D%20Mec%C3%A1nica%2FMaterias%2FEstabilidad%20III%20%28S23A%29&viewid=8fb571af%2D2ed7%2D424b%2D97fd%2Df9334449e687' },
  { id: '407', name: 'Fundamentos de Informática', category: 'especialidad', year: '1er año', carrera: 'Mecánica', driveLink: 'https://frbautneduar-my.sharepoint.com/personal/federizzo_frba_utn_edu_ar/_layouts/15/onedrive.aspx?id=%2Fpersonal%2Ffederizzo%5Ffrba%5Futn%5Fedu%5Far%2FDocuments%2F19%20de%20Agosto%20%2D%20Mec%C3%A1nica%2FMaterias%2FFundamentos%20de%20Inform%C3%A1tica&viewid=8fb571af%2D2ed7%2D424b%2D97fd%2Df9334449e687' },
  { id: '408', name: 'Ingeniería Ambiental y Seguridad Industrial', category: 'especialidad', year: '2do año', carrera: 'Mecánica', driveLink: 'https://frbautneduar-my.sharepoint.com/personal/federizzo_frba_utn_edu_ar/_layouts/15/onedrive.aspx?id=%2Fpersonal%2Ffederizzo%5Ffrba%5Futn%5Fedu%5Far%2FDocuments%2F19%20de%20Agosto%20%2D%20Mec%C3%A1nica%2FMaterias%2FIng%2E%20Ambiental%20y%20Seguridad%20Industrial&viewid=8fb571af%2D2ed7%2D424b%2D97fd%2Df9334449e687' },
  { id: '409', name: 'Ingeniería Mecánica I', category: 'especialidad', year: '1er año', carrera: 'Mecánica', driveLink: 'https://frbautneduar-my.sharepoint.com/personal/federizzo_frba_utn_edu_ar/_layouts/15/onedrive.aspx?id=%2Fpersonal%2Ffederizzo%5Ffrba%5Futn%5Fedu%5Far%2FDocuments%2F19%20de%20Agosto%20%2D%20Mec%C3%A1nica%2FMaterias%2FIngenier%C3%ADa%20Mec%C3%A1nica%20I&viewid=8fb571af%2D2ed7%2D424b%2D97fd%2Df9334449e687' },
  { id: '410', name: 'Ingeniería Mecánica II', category: 'especialidad', year: '2do año', carrera: 'Mecánica', driveLink: 'https://frbautneduar-my.sharepoint.com/personal/federizzo_frba_utn_edu_ar/_layouts/15/onedrive.aspx?id=%2Fpersonal%2Ffederizzo%5Ffrba%5Futn%5Fedu%5Far%2FDocuments%2F19%20de%20Agosto%20%2D%20Mec%C3%A1nica%2FMaterias%2FIngenier%C3%ADa%20Mec%C3%A1nica%20II&viewid=8fb571af%2D2ed7%2D424b%2D97fd%2Df9334449e687' },
  { id: '411', name: 'Ingeniería Mecánica III', category: 'especialidad', year: '3er año', carrera: 'Mecánica', driveLink: 'https://frbautneduar-my.sharepoint.com/personal/federizzo_frba_utn_edu_ar/_layouts/15/onedrive.aspx?id=%2Fpersonal%2Ffederizzo%5Ffrba%5Futn%5Fedu%5Far%2FDocuments%2F19%20de%20Agosto%20%2D%20Mec%C3%A1nica%2FMaterias%2FIngenier%C3%ADa%20Mec%C3%A1nica%20III&viewid=8fb571af%2D2ed7%2D424b%2D97fd%2Df9334449e687' },
  { id: '412', name: 'Instalaciones Industriales', category: 'especialidad', year: '5to año', carrera: 'Mecánica', driveLink: 'https://frbautneduar-my.sharepoint.com/personal/federizzo_frba_utn_edu_ar/_layouts/15/onedrive.aspx?id=%2Fpersonal%2Ffederizzo%5Ffrba%5Futn%5Fedu%5Far%2FDocuments%2F19%20de%20Agosto%20%2D%20Mec%C3%A1nica%2FMaterias%2FInstalaciones%20Industriales&viewid=8fb571af%2D2ed7%2D424b%2D97fd%2Df9334449e687' },
  { id: '413', name: 'Mantenimiento', category: 'especialidad', year: '5to año', carrera: 'Mecánica', driveLink: 'https://frbautneduar-my.sharepoint.com/personal/federizzo_frba_utn_edu_ar/_layouts/15/onedrive.aspx?id=%2Fpersonal%2Ffederizzo%5Ffrba%5Futn%5Fedu%5Far%2FDocuments%2F19%20de%20Agosto%20%2D%20Mec%C3%A1nica%2FMaterias%2FMantenimiento&viewid=8fb571af%2D2ed7%2D424b%2D97fd%2Df9334449e687' },
  { id: '414', name: 'Máquinas Alternativas y Turbomáquinas', category: 'especialidad', year: '5to año', carrera: 'Mecánica', driveLink: 'https://frbautneduar-my.sharepoint.com/personal/federizzo_frba_utn_edu_ar/_layouts/15/onedrive.aspx?id=%2Fpersonal%2Ffederizzo%5Ffrba%5Futn%5Fedu%5Far%2FDocuments%2F19%20de%20Agosto%20%2D%20Mec%C3%A1nica%2FMaterias%2FM%C3%A1quinas%20Alternativas%20y%20Turbom%C3%A1quinas&viewid=8fb571af%2D2ed7%2D424b%2D97fd%2Df9334449e687' },
  { id: '415', name: 'Materiales Metálicos', category: 'especialidad', year: '2do año', carrera: 'Mecánica', driveLink: 'https://frbautneduar-my.sharepoint.com/personal/federizzo_frba_utn_edu_ar/_layouts/15/onedrive.aspx?id=%2Fpersonal%2Ffederizzo%5Ffrba%5Futn%5Fedu%5Far%2FDocuments%2F19%20de%20Agosto%20%2D%20Mec%C3%A1nica%2FMaterias%2FMateriales%20Met%C3%A1licos&viewid=8fb571af%2D2ed7%2D424b%2D97fd%2Df9334449e687' },
  { id: '416', name: 'Mecánica de los Fluidos', category: 'especialidad', year: '4to año', carrera: 'Mecánica', driveLink: 'https://frbautneduar-my.sharepoint.com/personal/federizzo_frba_utn_edu_ar/_layouts/15/onedrive.aspx?id=%2Fpersonal%2Ffederizzo%5Ffrba%5Futn%5Fedu%5Far%2FDocuments%2F19%20de%20Agosto%20%2D%20Mec%C3%A1nica%2FMaterias%2FMec%C3%A1nica%20de%20los%20Fluidos&viewid=8fb571af%2D2ed7%2D424b%2D97fd%2Df9334449e687' },
  { id: '417', name: 'Mecánica Racional', category: 'especialidad', year: '3er año', carrera: 'Mecánica', driveLink: 'https://frbautneduar-my.sharepoint.com/personal/federizzo_frba_utn_edu_ar/_layouts/15/onedrive.aspx?id=%2Fpersonal%2Ffederizzo%5Ffrba%5Futn%5Fedu%5Far%2FDocuments%2F19%20de%20Agosto%20%2D%20Mec%C3%A1nica%2FMaterias%2FMec%C3%A1nica%20Racional&viewid=8fb571af%2D2ed7%2D424b%2D97fd%2Df9334449e687' },
  { id: '418', name: 'Mediciones y Ensayos', category: 'especialidad', year: '3er año', carrera: 'Mecánica', driveLink: 'https://frbautneduar-my.sharepoint.com/personal/federizzo_frba_utn_edu_ar/_layouts/15/onedrive.aspx?id=%2Fpersonal%2Ffederizzo%5Ffrba%5Futn%5Fedu%5Far%2FDocuments%2F19%20de%20Agosto%20%2D%20Mec%C3%A1nica%2FMaterias%2FMediciones%20y%20Ensayos&viewid=8fb571af%2D2ed7%2D424b%2D97fd%2Df9334449e687' },
  { id: '419', name: 'Metrología e Ingeniería de la Calidad', category: 'especialidad', year: '4to año', carrera: 'Mecánica', driveLink: 'https://frbautneduar-my.sharepoint.com/personal/federizzo_frba_utn_edu_ar/_layouts/15/onedrive.aspx?id=%2Fpersonal%2Ffederizzo%5Ffrba%5Futn%5Fedu%5Far%2FDocuments%2F19%20de%20Agosto%20%2D%20Mec%C3%A1nica%2FMaterias%2FMetrolog%C3%ADa%20e%20Ing%2E%20de%20la%20Calidad&viewid=8fb571af%2D2ed7%2D424b%2D97fd%2Df9334449e687' },
  { id: '420', name: 'Organización Industrial', category: 'especialidad', year: '5to año', carrera: 'Mecánica', driveLink: 'https://frbautneduar-my.sharepoint.com/personal/federizzo_frba_utn_edu_ar/_layouts/15/onedrive.aspx?id=%2Fpersonal%2Ffederizzo%5Ffrba%5Futn%5Fedu%5Far%2FDocuments%2F19%20de%20Agosto%20%2D%20Mec%C3%A1nica%2FMaterias%2FOrganizaci%C3%B3n%20Industrial&viewid=8fb571af%2D2ed7%2D424b%2D97fd%2Df9334449e687' },
  { id: '421', name: 'Proyecto Final', category: 'especialidad', year: '5to año', carrera: 'Mecánica', driveLink: 'https://frbautneduar-my.sharepoint.com/personal/federizzo_frba_utn_edu_ar/_layouts/15/onedrive.aspx?id=%2Fpersonal%2Ffederizzo%5Ffrba%5Futn%5Fedu%5Far%2FDocuments%2F19%20de%20Agosto%20%2D%20Mec%C3%A1nica%2FMaterias%2FProyecto%20Final&viewid=8fb571af%2D2ed7%2D424b%2D97fd%2Df9334449e687' },
  { id: '422', name: 'Sistemas de Representación', category: 'especialidad', year: '1er año', carrera: 'Mecánica', driveLink: 'https://frbautneduar-my.sharepoint.com/personal/federizzo_frba_utn_edu_ar/_layouts/15/onedrive.aspx?id=%2Fpersonal%2Ffederizzo%5Ffrba%5Futn%5Fedu%5Far%2FDocuments%2F19%20de%20Agosto%20%2D%20Mec%C3%A1nica%2FMaterias%2FSistemas%20de%20Representaci%C3%B3n&viewid=8fb571af%2D2ed7%2D424b%2D97fd%2Df9334449e687' },
  { id: '423', name: 'Tecnología de la Fabricación', category: 'especialidad', year: '5to año', carrera: 'Mecánica', driveLink: 'https://frbautneduar-my.sharepoint.com/personal/federizzo_frba_utn_edu_ar/_layouts/15/onedrive.aspx?id=%2Fpersonal%2Ffederizzo%5Ffrba%5Futn%5Fedu%5Far%2FDocuments%2F19%20de%20Agosto%20%2D%20Mec%C3%A1nica%2FMaterias%2FTecnolog%C3%ADa%20de%20la%20Fabricaci%C3%B3n&viewid=8fb571af%2D2ed7%2D424b%2D97fd%2Df9334449e687' },
  { id: '424', name: 'Tecnología del Calor', category: 'especialidad', year: '4to año', carrera: 'Mecánica', driveLink: 'https://frbautneduar-my.sharepoint.com/personal/federizzo_frba_utn_edu_ar/_layouts/15/onedrive.aspx?id=%2Fpersonal%2Ffederizzo%5Ffrba%5Futn%5Fedu%5Far%2FDocuments%2F19%20de%20Agosto%20%2D%20Mec%C3%A1nica%2FMaterias%2FTecnolog%C3%ADa%20del%20Calor&viewid=8fb571af%2D2ed7%2D424b%2D97fd%2Df9334449e687' },
  { id: '425', name: 'Termodinámica', category: 'especialidad', year: '3er año', carrera: 'Mecánica', driveLink: 'https://frbautneduar-my.sharepoint.com/personal/federizzo_frba_utn_edu_ar/_layouts/15/onedrive.aspx?id=%2Fpersonal%2Ffederizzo%5Ffrba%5Futn%5Fedu%5Far%2FDocuments%2F19%20de%20Agosto%20%2D%20Mec%C3%A1nica%2FMaterias%2FTermodin%C3%A1mica&viewid=8fb571af%2D2ed7%2D424b%2D97fd%2Df9334449e687' },
  { id: '426', name: 'Diseño 3D', category: 'electiva', year: 'N/A', carrera: 'Mecánica', driveLink: 'https://frbautneduar-my.sharepoint.com/personal/federizzo_frba_utn_edu_ar/_layouts/15/onedrive.aspx?id=%2Fpersonal%2Ffederizzo%5Ffrba%5Futn%5Fedu%5Far%2FDocuments%2F19%20de%20Agosto%20%2D%20Mec%C3%A1nica%2FMaterias%2FElectivas%2F02%20Dise%C3%B1o%203D&viewid=8fb571af%2D2ed7%2D424b%2D97fd%2Df9334449e687' },
  { id: '427', name: 'Energías Renovables', category: 'electiva', year: 'N/A', carrera: 'Mecánica', driveLink: 'https://frbautneduar-my.sharepoint.com/personal/federizzo_frba_utn_edu_ar/_layouts/15/onedrive.aspx?id=%2Fpersonal%2Ffederizzo%5Ffrba%5Futn%5Fedu%5Far%2FDocuments%2F19%20de%20Agosto%20%2D%20Mec%C3%A1nica%2FMaterias%2FElectivas%2F03%20Energ%C3%ADas%20Renovables&viewid=8fb571af%2D2ed7%2D424b%2D97fd%2Df9334449e687' },
  { id: '428', name: 'Aplicaciones Mecánicas con Microcontroladores', category: 'electiva', year: 'N/A', carrera: 'Mecánica', driveLink: 'https://frbautneduar-my.sharepoint.com/personal/federizzo_frba_utn_edu_ar/_layouts/15/onedrive.aspx?id=%2Fpersonal%2Ffederizzo%5Ffrba%5Futn%5Fedu%5Far%2FDocuments%2F19%20de%20Agosto%20%2D%20Mec%C3%A1nica%2FMaterias%2FElectivas%2F04%20Aplicaciones%20Mec%C3%A1nicas%20con%20Microcontroladores&viewid=8fb571af%2D2ed7%2D424b%2D97fd%2Df9334449e687' },
  { id: '429', name: 'Automotores', category: 'electiva', year: 'N/A', carrera: 'Mecánica', driveLink: 'https://frbautneduar-my.sharepoint.com/personal/federizzo_frba_utn_edu_ar/_layouts/15/onedrive.aspx?id=%2Fpersonal%2Ffederizzo%5Ffrba%5Futn%5Fedu%5Far%2FDocuments%2F19%20de%20Agosto%20%2D%20Mec%C3%A1nica%2FMaterias%2FElectivas%2F05%20Automotores&viewid=8fb571af%2D2ed7%2D424b%2D97fd%2Df9334449e687' },
  { id: '430', name: 'Evaluación y Gestión de Proyectos de Ingeniería Sustentable', category: 'electiva', year: 'N/A', carrera: 'Mecánica', driveLink: 'https://frbautneduar-my.sharepoint.com/personal/federizzo_frba_utn_edu_ar/_layouts/15/onedrive.aspx?id=%2Fpersonal%2Ffederizzo%5Ffrba%5Futn%5Fedu%5Far%2FDocuments%2F19%20de%20Agosto%20%2D%20Mec%C3%A1nica%2FMaterias%2FElectivas%2F05%20Evaluaci%C3%B3n%20y%20Gesti%C3%B3n%20de%20Proyectos%20de%20Ing%2E%20Sustentable&viewid=8fb571af%2D2ed7%2D424b%2D97fd%2Df9334449e687' },
  { id: '431', name: 'Proyecto de Instalaciones Frigoríficas y Aire Acondicionado', category: 'electiva', year: 'N/A', carrera: 'Mecánica', driveLink: 'https://frbautneduar-my.sharepoint.com/personal/federizzo_frba_utn_edu_ar/_layouts/15/onedrive.aspx?id=%2Fpersonal%2Ffederizzo%5Ffrba%5Futn%5Fedu%5Far%2FDocuments%2F19%20de%20Agosto%20%2D%20Mec%C3%A1nica%2FMaterias%2FElectivas%2F05%20Proyecto%20de%20instalaciones%20frigor%C3%ADficas%20y%20aire%20acondicionado&viewid=8fb571af%2D2ed7%2D424b%2D97fd%2Df9334449e687' },
  { id: '500', name: 'Fundamentos de Informática', category: 'especialidad', year: '1er año', carrera: 'Química', driveLink: 'https://drive.google.com/open?id=197OZjWm30MC_4PBBnlYe8QL9XOdSidbf' },
  { id: '501', name: 'Intro a la Ingeniería Química (ex Inte1)', category: 'especialidad', year: '1er año', carrera: 'Química', driveLink: 'https://drive.google.com/open?id=1dVkIyDpwgT7gQZlF6EhOkAlg96Eo2nHx' },
  { id: '502', name: 'Química (ex Quimica Gral)', category: 'especialidad', year: '1er año', carrera: 'Química', driveLink: 'https://drive.google.com/open?id=1vbe_CjZ3u947GYfa1pq1BdqNmhCMzlMF' },
  { id: '503', name: 'Sistemas de Representación', category: 'especialidad', year: '1er año', carrera: 'Química', driveLink: 'https://drive.google.com/open?id=1y7g6aU8d7ETx21RwAtb7E_lo8aO8jIWW' },
  { id: '504', name: 'Introducción a Equipos y Procesos (Ex Inte2)', category: 'especialidad', year: '2do año', carrera: 'Química', driveLink: 'https://drive.google.com/open?id=1ZizG6WrZ7fM8vsoSCRDuTa9l8ceLYXRL' },
  { id: '505', name: 'Química Orgánica', category: 'especialidad', year: '2do año', carrera: 'Química', driveLink: 'https://drive.google.com/open?id=1XUXhDW6OZTRM-zONwTCEppqJCfkrSx4z' },
  { id: '506', name: 'Química Inorgánica', category: 'especialidad', year: '2do año', carrera: 'Química', driveLink: 'https://drive.google.com/open?id=1WFyt9ZQs7YBtqVX82zjYMsSVCP5CWR5M' },
  { id: '507', name: 'Termodinámica', category: 'especialidad', year: '3er año', carrera: 'Química', driveLink: 'https://drive.google.com/open?id=1GIu51w0J2zNP9JSpyYl_8lZdj8TxoYiW' },
  { id: '508', name: 'Química Analítica', category: 'especialidad', year: '3er año', carrera: 'Química', driveLink: 'https://drive.google.com/open?id=1e-NCVC5yTEwPfKQFIqrwW9qcYUBdWuwd' },
  { id: '509', name: 'Química Aplicada', category: 'especialidad', year: '3er año', carrera: 'Química', driveLink: 'https://drive.google.com/open?id=1m7qXx3Jfjetpp73LiRi5aKyYqPTGxqsf' },
  { id: '510', name: 'Matemática Superior Aplicada', category: 'especialidad', year: '3er año', carrera: 'Química', driveLink: 'https://drive.google.com/open?id=1JdMOPRrVe5kWogww-zuAjREDkktKsNsZ' },
  { id: '511', name: 'Balances de Masa y Energía (Ex Inte3)', category: 'especialidad', year: '3er año', carrera: 'Química', driveLink: 'https://drive.google.com/open?id=1Spy1450j48Jd0k3m8GFZdec0pTAgQ0GF' },
  { id: '512', name: 'Microbiología y Química Biológica', category: 'especialidad', year: '3er año', carrera: 'Química', driveLink: 'https://drive.google.com/open?id=1KXUKTUIwCl4pknoNMN7boKEYTdCos-wv' },
  { id: '513', name: 'Fisicoquímica', category: 'especialidad', year: '3er año', carrera: 'Química', driveLink: 'https://drive.google.com/open?id=1DKTIY2O4ebeHrH-CqP4ycBHO4bwMO9GL' },
  { id: '514', name: 'Fenómenos de Transporte', category: 'especialidad', year: '3er año', carrera: 'Química', driveLink: 'https://drive.google.com/open?id=10SJBm_P0sUAN5HMRyIhOi7JRoCkLHkyx' },
  { id: '515', name: 'Ciencia de los Materiales', category: 'especialidad', year: '3er año', carrera: 'Química', driveLink: 'https://drive.google.com/open?id=1d99UIfefbVBVhS6ID5_vzj0KJdEv9eEN' },
  { id: '516', name: 'Organización Industrial', category: 'especialidad', year: '4to año', carrera: 'Química', driveLink: 'https://drive.google.com/open?id=1lxwhB-I0fz4ZOKUC8rj9IhAMdX86dsp_' },
  { id: '517', name: 'Tecnología de la Energía Térmica (TET/Calor)', category: 'especialidad', year: '4to año', carrera: 'Química', driveLink: 'https://drive.google.com/open?id=1RFhTXYyQa4pCLA6dZBvkNXWG1qD0VhkO' },
  { id: '518', name: 'Operaciones Unitarias I', category: 'especialidad', year: '4to año', carrera: 'Química', driveLink: 'https://drive.google.com/open?id=1jX1WliQxQnpusFUoZYCDTRZlQvY-esIF' },
  { id: '519', name: 'Operaciones Unitarias II', category: 'especialidad', year: '4to año', carrera: 'Química', driveLink: 'https://drive.google.com/open?id=1dT6MSAQb2V1y9n63xXZsKXL8s00Oaei4' },
  { id: '520', name: 'Ingeniería de las Reacciones Químicas (IRQ)', category: 'especialidad', year: '4to año', carrera: 'Química', driveLink: 'https://drive.google.com/open?id=1m2KGmMuZA80JZg34suITYFFKS-RYnl1b' },
  { id: '521', name: 'Diseño, simulación, optimización y seguridad de procesos (Inte4)', category: 'especialidad', year: '4to año', carrera: 'Química', driveLink: 'https://drive.google.com/open?id=1nVkWTS0cV502syv4weI2Br7ChpUczeee' },
  { id: '522', name: 'Proyecto Final (INTE V)', category: 'especialidad', year: '5to año', carrera: 'Química', driveLink: 'https://drive.google.com/open?id=1RNUF2GsB7kB76XwQTPQZgqEtBaUHa2mG' },
  { id: '523', name: 'Higiene y seguridad en el trabajo', category: 'especialidad', year: '5to año', carrera: 'Química', driveLink: 'https://drive.google.com/open?id=1ft9RehCsREsWa8JK3p8XlVFaEN5OBm9-' },
  { id: '524', name: 'Control Automático de Procesos', category: 'especialidad', year: '5to año', carrera: 'Química', driveLink: 'https://drive.google.com/open?id=1syndhsYgBjb4Pei5XzdGvx-yFmvU5nxa' },
  { id: '525', name: 'Calidad y Control Estadístico de Procesos', category: 'especialidad', year: '5to año', carrera: 'Química', driveLink: 'https://drive.google.com/open?id=1j8a5jEeWHSgIYHbM0FfUsQCorg5vRl4t' },
  { id: '526', name: 'Radioquímica y aplicaciones nucleares', category: 'electiva', year: 'N/A', carrera: 'Química', driveLink: 'https://drive.google.com/open?id=1AzenIxoYTX5sCBE44Iasmz2lfdsRZE-1' },
  { id: '527', name: 'Instalaciones Eléctricas de Planta', category: 'electiva', year: 'N/A', carrera: 'Química', driveLink: 'https://drive.google.com/open?id=1o_vyBB2Prh8h1V2JqKj4fPz6E4QoQVtb' },
  { id: '528', name: 'Electroquímica', category: 'electiva', year: 'N/A', carrera: 'Química', driveLink: 'https://drive.google.com/open?id=1qRC56zOAmmfUo7S_Bm6ZS0fDFrHOgK3M' },
  { id: '529', name: 'Gestión de la Calidad', category: 'electiva', year: 'N/A', carrera: 'Química', driveLink: 'https://drive.google.com/open?id=1DbZ2WAX3ZDyum3PjO--W6ZDcqM5pi3v-' },
  { id: '530', name: 'Electrónica para Ing Química I', category: 'electiva', year: 'N/A', carrera: 'Química', driveLink: 'https://drive.google.com/open?id=1nxW2zaoYXZ4spUB_Muxisq5f7vuXfy0A' },
  { id: '531', name: 'Electrónica para Ing Química 2', category: 'electiva', year: 'N/A', carrera: 'Química', driveLink: 'https://drive.google.com/open?id=1W_XfqjlprORiL56McGa82Ciqv5tqImjf' },
  { id: '532', name: 'Alimentos de origen animal', category: 'electiva', year: 'N/A', carrera: 'Química', driveLink: 'https://drive.google.com/open?id=1YJrQSi6HNojuf99HojyTr-0dJEOFgmvB' },
]
const ALL_YEARS = ['1er año', '2do año', '3er año', '4to año', '5to año', '6to año']

export function MaterialClient({ carrera }: { carrera: string }) {
  const [searchQuery, setSearchQuery] = useState('')
  const [activeCategory, setActiveCategory] = useState<'todas' | 'homogenea' | 'especialidad' | 'electiva'>('todas')
  const [activeYear, setActiveYear] = useState<string | null>(null)
  const [expandedId, setExpandedId] = useState<string | null>(null)

  const normalizeString = (str: string) => {
    return str.normalize('NFD').replace(/[\u0300-\u036f]/g, '').toLowerCase()
  }

  const availableYears = useMemo(() => {
    const materiasCarrera = ALL_MATERIAS.filter(m => m.category === 'homogenea' || m.carrera === carrera)
    const filteredForYears = materiasCarrera.filter(m => {
      const matchesSearch = normalizeString(m.name).includes(normalizeString(searchQuery))
      const matchesCategory = activeCategory === 'todas' ? true : m.category === activeCategory
      return matchesSearch && matchesCategory
    })
    const yearsSet = new Set(filteredForYears.map(m => m.year).filter(Boolean) as string[])
    return ALL_YEARS.filter(y => yearsSet.has(y))
  }, [searchQuery, activeCategory, carrera])

  const filteredMaterias = useMemo(() => {
    // 1. Filtrar las que pertenecen a la carrera o son homogéneas
    const materiasCarrera = ALL_MATERIAS.filter(m => m.category === 'homogenea' || m.carrera === carrera)

    return materiasCarrera.filter(m => {
      const matchesSearch = normalizeString(m.name).includes(normalizeString(searchQuery))
      const matchesCategory = activeCategory === 'todas' ? true : m.category === activeCategory
      const matchesYear = activeYear ? m.year === activeYear : true
      return matchesSearch && matchesCategory && matchesYear
    })
  }, [searchQuery, activeCategory, activeYear, carrera])

  return (
    <div className="space-y-8">

      {/* Search and Filters Section */}
      <div className="bg-white rounded-xl shadow-sm border border-secondary-200 p-4 space-y-5">

        {/* Search Bar */}
        <div className="relative">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-secondary-400 w-5 h-5" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Buscar por nombre de materia..."
            className="w-full pl-10 pr-4 py-3 rounded-xl border border-secondary-200 bg-secondary-50 focus:bg-white focus:ring-2 focus:ring-primary-500 outline-none transition-all"
          />
        </div>

        {/* Primary Filters (Category) */}
        <div className="flex flex-row items-center gap-3">
          <Filter size={20} className="text-secondary-500 flex-shrink-0" />
          <div className="flex flex-wrap gap-2">
            <button
              onClick={() => { setActiveCategory('todas'); setActiveYear(null); }}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-colors border ${activeCategory === 'todas'
                  ? 'bg-primary-500 text-secondary-900 border-primary-600 shadow-sm'
                  : 'bg-white text-secondary-600 border-secondary-200 hover:bg-secondary-50'
                }`}
            >
              Todas
            </button>
            <button
              onClick={() => { setActiveCategory('homogenea'); setActiveYear(null); }}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-colors border ${activeCategory === 'homogenea'
                  ? 'bg-primary-500 text-secondary-900 border-primary-600 shadow-sm'
                  : 'bg-white text-secondary-600 border-secondary-200 hover:bg-secondary-50'
                }`}
            >
              Homogéneas
            </button>
            <button
              onClick={() => { setActiveCategory('especialidad'); setActiveYear(null); }}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-colors border ${activeCategory === 'especialidad'
                  ? 'bg-primary-500 text-secondary-900 border-primary-600 shadow-sm'
                  : 'bg-white text-secondary-600 border-secondary-200 hover:bg-secondary-50'
                }`}
            >
              de Especialidad
            </button>
            <button
              onClick={() => { setActiveCategory('electiva'); setActiveYear(null); }}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-colors border ${activeCategory === 'electiva'
                  ? 'bg-primary-500 text-secondary-900 border-primary-600 shadow-sm'
                  : 'bg-white text-secondary-600 border-secondary-200 hover:bg-secondary-50'
                }`}
            >
              Electivas
            </button>
          </div>
        </div>

        {/* Secondary Filters (Years) - Only visible if there are valid years to filter by */}
        {availableYears.length > 0 && (
          <div className="space-y-3 pt-4 border-t border-secondary-100 animate-in fade-in slide-in-from-top-2 duration-300">
            <h3 className="text-sm font-semibold text-secondary-700">Filtro por Nivel</h3>
            <div className="flex flex-wrap gap-2 pr-2">
              <button
                onClick={() => setActiveYear(null)}
                className={`px-3 py-1.5 rounded-md text-xs font-semibold transition-colors border ${activeYear === null
                    ? 'bg-secondary-800 text-white border-secondary-800'
                    : 'bg-secondary-50 text-secondary-600 border-secondary-200 hover:bg-secondary-100'
                  }`}
              >
                Todos
              </button>
              {availableYears.map(year => (
                <button
                  key={year}
                  onClick={() => setActiveYear(year)}
                  className={`px-3 py-1.5 rounded-md text-xs font-semibold transition-colors border ${activeYear === year
                      ? 'bg-secondary-800 text-white border-secondary-800'
                      : 'bg-secondary-50 text-secondary-600 border-secondary-200 hover:bg-secondary-100'
                    }`}
                >
                  {year}
                </button>
              ))}
            </div>
          </div>
        )}
      </div>

      {/* Results List */}
      <div className="space-y-6">
        {filteredMaterias.length === 0 ? (
          <div className="text-center py-12 bg-white rounded-xl border border-secondary-200">
            <Folder className="w-12 h-12 text-secondary-300 mx-auto mb-3" />
            <h3 className="text-lg font-medium text-secondary-600">No se encontraron materias.</h3>
            <p className="text-secondary-500 text-sm mt-1">Intentá buscar con otros términos o filtros.</p>
          </div>
        ) : (
          filteredMaterias.map((materia) => (
            <div key={materia.id} className="bg-white rounded-xl border border-secondary-200 overflow-hidden shadow-sm hover:shadow-md transition-all">
              <div 
                className="p-4 sm:p-5 flex flex-col sm:flex-row sm:items-center justify-between gap-4 cursor-pointer hover:bg-secondary-50 transition-colors"
                onClick={() => setExpandedId(expandedId === materia.id ? null : materia.id)}
              >
                <div className="flex items-center gap-3">
                  <div className={`p-2 rounded-lg 
                    ${expandedId === materia.id ? 'bg-primary-100 text-primary-600' : 'bg-secondary-100 text-secondary-500'} 
                    transition-colors flex-shrink-0`}
                  >
                    <ChevronDown className={`w-5 h-5 transition-transform duration-300 ${expandedId === materia.id ? 'rotate-180' : ''}`} />
                  </div>
                  <div>
                    <h3 className="font-bold text-secondary-800 text-base sm:text-lg">{materia.name}</h3>
                    {(materia.category === 'especialidad' || materia.category === 'electiva') && (
                      <span className="inline-block mt-1 px-2 py-0.5 bg-secondary-100 text-secondary-600 text-[10px] sm:text-xs font-semibold rounded-md border border-secondary-200">
                        {materia.year} - {materia.category === 'especialidad' ? `Ingeniería ${carrera}` : 'Electiva'}
                      </span>
                    )}
                  </div>
                </div>
                
                <a
                  href={materia.driveLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={(e) => e.stopPropagation()} // Prevent accordion from toggling when clicking the direct link
                  className="text-sm font-medium text-blue-600 flex items-center gap-1.5 hover:text-blue-700 bg-blue-50 py-1.5 px-3 rounded-lg w-fit transition-colors border border-blue-100"
                >
                  Acceder al Drive <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>

              {/* Render condicional para no saturar la red */}
              {expandedId === materia.id && (
                <div className="border-t border-secondary-100 bg-secondary-50/50">
                  <DriveFolderList driveLink={materia.driveLink} />
                </div>
              )}
            </div>
          ))
        )}
      </div>
    </div>
  )
}
