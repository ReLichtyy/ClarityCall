import frontEndImage from "@/assets/services/front-end-creative.webp"
import productEngineeringImage from "@/assets/services/product-engineering-creative.webp"
import techLeadImage from "@/assets/services/tech-lead-creative.webp"
import cybersecurityImage from "@/assets/services/cybersecurity-creative.webp"
import { SERVICIOS_API_URL } from "@/services/serviciosService"

const creativeImages = {
  "mentoria-front-end.png": frontEndImage,
  "mentoria-product-engineering.png": productEngineeringImage,
  "mentoria-tech-lead.png": techLeadImage,
  "mentoria-ciberseguridad.png": cybersecurityImage,
}

export function getServicioImageUrl(imageName) {
  if (!imageName) return null

  const safeFileName = String(imageName).split(/[\\/]/).pop()
  const creativeImage = creativeImages[safeFileName.toLowerCase()]

  return creativeImage
    || `${SERVICIOS_API_URL}/images/${encodeURIComponent(safeFileName)}`
}
