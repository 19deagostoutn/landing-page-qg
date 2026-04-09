const xlsx = require('xlsx');
const fs = require('fs');
const workbook = xlsx.readFile('MATERIAS CIVIL.xlsx');
const worksheet = workbook.Sheets[workbook.SheetNames[0]];
const json = xlsx.utils.sheet_to_json(worksheet);

const over200 = json.filter(row => row.ID >= 200);
let output = '  // --- MOCKS OTRAS CARRERAS ---\n';
for (const row of over200) {
  const catRaw = row['HOMOGENEA/ESPECIALIDAD'] || 'especialidad';
  const cat = catRaw.toString().toLowerCase();
  const validCat = (cat === 'homogenea' || cat === 'electiva') ? cat : 'especialidad';
  const year = row['AÑO'] ? row['AÑO'].toString().trim() : '';
  const carrera = row.CARRERA ? row.CARRERA.toString().trim() : 'Sin Asignar';
  const link = row.LINK ? row.LINK.toString().trim() : '#';
  output += `  { id: '${row.ID}', name: '${row.MATERIA.trim()}', category: '${validCat}', year: '${year}', carrera: '${carrera}', driveLink: '${link}' },\n`;
}
fs.writeFileSync('new-mocks.tsx', output);
console.log('Wrote to new-mocks.tsx');
