# Azure SQL API Bridge

API intermedia para conectar Lovable/Supabase con Azure SQL Server.

## 🚀 Despliegue en Vercel

### 1. Sube este proyecto a GitHub
- Crea un nuevo repositorio en GitHub
- Sube estos archivos

### 2. Importa en Vercel
- Ve a https://vercel.com
- Click en "Add New Project"
- Importa tu repositorio de GitHub
- Click en "Import"

### 3. Configura las variables de entorno
En el paso de configuración de Vercel, agrega:

```
AZURE_SQL_USER=tu_usuario_aqui
AZURE_SQL_PASSWORD=tu_password_aqui
```

### 4. Deploya
- Click en "Deploy"
- Espera 1-2 minutos
- ¡Listo!

## 📡 Endpoints disponibles

### GET /api/catalogos
Obtiene registros de la tabla LOG_Catalogos

**Parámetros opcionales:**
- `limit`: Número de registros (default: 10)

**Ejemplo:**
```
https://tu-proyecto.vercel.app/api/catalogos?limit=20
```

**Respuesta:**
```json
{
  "success": true,
  "count": 10,
  "data": [...]
}
```

## 🔌 Uso desde Lovable

```javascript
const response = await fetch('https://tu-proyecto.vercel.app/api/catalogos?limit=10');
const data = await response.json();

if (data.success) {
  console.log('Datos:', data.data);
} else {
  console.error('Error:', data.error);
}
```

## 🛠️ Agregar más endpoints

Para crear nuevos endpoints, agrega archivos en la carpeta `api/`:
- `api/otro-endpoint.js`
- `api/clientes.js`
- etc.

Cada archivo exporta una función que maneja las peticiones.
