import altoMonasterioImage from '../assets/images/condominioaltomonasterio2.png'
import bosqueLosPeumosImage from '../assets/images/condominiobosquelospeumos.png'
import bosquesPuyehueImage from '../assets/images/condominiobosquesdepuyehue.png'
import rocasDelTaboImage from '../assets/images/condominiorocasdeltabo.png'
import parqueGranadillaImage from '../assets/images/parquegranadilla.jpeg'
import stripCenterImage from '../assets/images/stripcenterrinconpenablanca.png'
import tecnofiberImage from '../assets/images/empresatecnofiber.jpg'
import portonesMollesImage from '../assets/images/portonesdelosmollesdos.png'

export const projects = [
  {
    id: 1,
    title: 'Condominio Bosques de Puyehue',
    category: 'Proyecto habitacional',
    location: 'Región de Valparaíso',
    image: bosquesPuyehueImage,
    description:
      'Desarrollo de soluciones eléctricas y obras complementarias para proyecto inmobiliario, de acuerdo con sus requerimientos técnicos y constructivos.',
    featured: true,
  },
  {
    id: 2,
    title: 'Condominio Alto Monasterio',
    category: 'Proyecto habitacional',
    location: 'Región de Valparaíso',
    image: altoMonasterioImage,
    description:
      'Desarrollo de obras eléctricas para proyecto inmobiliario, incorporando infraestructura, canalizaciones y soluciones asociadas a la distribución eléctrica.',
    featured: true,
  },
  {
    id: 3,
    title: 'Condominio Bosque Los Peumos',
    category: 'Proyecto habitacional',
    location: 'Región de Valparaíso',
    image: bosqueLosPeumosImage,
    description:
      'Ejecución de infraestructura eléctrica subterránea para proyecto habitacional, considerando seguridad, continuidad operacional y ordenamiento de redes.',
    featured: false,
  },
  {
    id: 4,
    title: 'Parque Granadilla',
    category: 'Proyecto de infraestructura',
    location: 'Región de Valparaíso',
    image: parqueGranadillaImage,
    description:
      'Participación en el desarrollo de infraestructura eléctrica y soluciones técnicas asociadas a las necesidades operativas del proyecto.',
    featured: true,
  },
  {
    id: 5,
    title: 'Portones de los Molles II',
    category: 'Proyecto habitacional',
    location: 'San Felipe, Región de Valparaíso',
    image: portonesMollesImage,
    description:
      'Construcción de empalmes concentrados para proyectos de loteo, garantizando una distribución eléctrica segura, ordenada y conforme a la normativa vigente.',
    featured: false,
  },
  {
    id: 6,
    title: 'Strip Center Rincón Peñablanca',
    category: 'Proyecto comercial',
    location: 'Peñablanca, Región de Valparaíso',
    image: stripCenterImage,
    description:
      'Ejecución de soluciones eléctricas para infraestructura comercial, integrando instalaciones, canalizaciones y requerimientos técnicos del recinto.',
    featured: false,
  },
  {
    id: 7,
    title: 'Empresa Tecnofiber',
    category: 'Proyecto industrial',
    location: 'Región de Valparaíso',
    image: tecnofiberImage,
    description:
      'Desarrollo de trabajos eléctricos para instalaciones de carácter industrial, con foco en seguridad, continuidad y cumplimiento técnico.',
    featured: false,
  },
  {
    id: 8,
    title: 'Condominio Rocas del Tabo',
    category: 'Proyecto habitacional',
    location: 'El Tabo, Región de Valparaíso',
    image: rocasDelTaboImage,
    description:
      'Implementación de obras eléctricas para condominio residencial, incluyendo canalizaciones, redes y apoyo técnico durante la ejecución.',
    featured: false,
  },
]

export const featuredProjects = projects.filter((project) => project.featured)