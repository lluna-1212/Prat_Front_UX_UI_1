# Conceptos fundamentales de Cloud Computing (AZ-900)

![alt text](image.png)

## 1. ¿Qué es la computación en la nube?
La nube es un modelo de acceso remoto a recursos (cómputo, almacenamiento, aplicaciones) a través de Internet, sin necesidad de infraestructura local. Los grandes proveedores (AWS, Azure, GCP, etc.) entregan estos servicios bajo un esquema de pago por uso.

### Ventajas económicas  
- **Modelo pay-as-you-go**: pagas solo lo que consumes.  
- **Economías de escala** del proveedor ⇢ precios más bajos.  
- **Escalado bajo demanda** evita comprar hardware que luego quede infrautilizado.

---

## 2. Beneficios clave
| Beneficio | Descripción resumida |
|-----------|----------------------|
| **Alta disponibilidad** | Cumplimiento de SLA con mínimos tiempos de inactividad. |
| **Escalabilidad** | Crecimiento vertical (más CPU/RAM) u horizontal (más instancias). |
| **Elasticidad** | Auto-escalado dinámico según la carga. |
| **Agilidad** | Aprovisiona recursos en minutos, no en semanas. |
| **Distribución geográfica** | Despliegues cercanos al usuario para menor latencia. |
| **Recuperación ante desastres** | Copias de seguridad y replicación multi-región. |

---

## 3. CapEx vs OpEx
- **CapEx (Gasto de Capital)**: inversión inicial en hardware que se deprecia en el tiempo.  
- **OpEx (Gasto Operativo)**: pago corriente por un servicio; se deduce el mismo año y no requiere inversión inicial.

> **La nube adopta OpEx** y un **modelo basado en consumo**:  
> *Sin costes iniciales* · *Se paga por recursos extra solo cuando se necesitan* · *Se deja de pagar al liberarlos*

---

## 4. Tipos de despliegue
| Tipo | Idea central | Ventajas |
|------|--------------|----------|
| **Nube pública** | Infraestructura del proveedor, multi-tenant. | Sin CapEx, aprovisionamiento rápido, pago por uso. |
| **Nube privada** | Infraestructura dedicada y gestionada por la organización. | Control total sobre seguridad y cumplimiento. |
| **Nube híbrida** | Mezcla de ambas anteriores. | Máxima flexibilidad para ubicar cargas y datos. |

---

## 5. Modelos de servicio

### IaaS – Infrastructure as a Service
Hardware virtualizado (VM, redes, almacenamiento).  
- Agilidad y control del SO/hardware  
- OpEx, pago según consumo  
- Requiere gestionar el sistema operativo propio

### PaaS – Platform as a Service
Entorno gestionado para desplegar aplicaciones.  
- Sin administrar servidores  
- Mayor productividad y herramientas DevOps  
- Puede limitar lenguajes o frameworks soportados

### SaaS – Software as a Service
Aplicación lista para usar vía web.  
- Sin instalación, acceso desde cualquier lugar  
- Suscripción mensual/anual  
- Poca personalización sobre la funcionalidad base

### Serverless Computing
Ejecución basada en eventos; la infraestructura es invisible para el desarrollador.  
- Escalado instantáneo y granular  
- Se facturan solo los milisegundos de ejecución

---

## 6. ¿Qué es Microsoft Azure?
Conjunto de servicios en la nube en expansión que permite crear, administrar e implementar aplicaciones globales usando herramientas y marcos de tu elección.
