---
layout: page
title: Sesión 5 - Diseño de Arquitectura y Diagramas Técnicos
---

<SlidesViewer>

# Diseño de Arquitectura y Diagramas Técnicos

## Proyecto Intermodular II | El Plano Maestro del Proyecto

-----

## ¿Qué vamos a aprender hoy?

El arte de diseñar y comunicar la arquitectura de software mediante diagramas técnicos, desde la visión de alto nivel hasta los detalles de implementación.

**Ejemplo central: El ecosistema completo de TaskFlow (DAW, DAM, ASIR).**

1. **¿Qué es la Arquitectura de Software?**: Monolitos vs Microservicios, API-First.
2. **Diagramas de Alto Nivel (C4 Model)**: Contexto, Contenedores, Despliegue.
3. **Diagramas Entidad-Relación (ERD)**: Modelado de bases de datos.
4. **Diagramas de Casos de Uso**: Definiendo funcionalidades desde la vista del usuario.
5. **Diagramas de Secuencia**: Flujos técnicos de interacción entre componentes.
6. **Herramientas Visuales**: Draw.io, Lucidchart, dbdiagram.io.
7. **Diagramas como Código**: Mermaid y la filosofía DaC (Diagrams as Code).
8. **Práctica: Diseñando TaskFlow**: Actividades específicas por equipo (DAW, DAM, ASIR).

-----

# **Capítulo 1: ¿Qué es la Arquitectura de Software?**

### Los cimientos invisibles del éxito

-----

## Definición

> **La arquitectura de software es el conjunto de decisiones estructurales fundamentales sobre cómo organizar un sistema: sus componentes, sus responsabilidades y cómo se comunican entre sí.**

Es el **plano maestro** que permite que equipos diferentes (DAW, DAM, ASIR) construyan piezas que encajan perfectamente.

-----

## Estilos arquitectónicos

### Monolito

**Características:**

- Todo el código en una sola aplicación
- Base de datos única compartida
- Despliegue como una unidad

**Ventajas:** Simplicidad inicial, desarrollo rápido
**Desventajas:** Difícil escalar, acoplamiento alto

### Microservicios

**Características:**

- Sistema dividido en servicios pequeños e independientes
- Cada servicio con su propia base de datos
- Comunicación mediante APIs

**Ventajas:** Escalabilidad, resiliencia, equipos autónomos
**Desventajas:** Complejidad operacional, latencia de red

-----

## Nuestro enfoque: API-First (Híbrido)

**TaskFlow** usa arquitectura **API-First**:

- Backend (DAW) expone API REST como "fuente de verdad"
- Frontend Web (DAW) consume la API
- App Móvil (DAM) consume la misma API
- Infraestructura (ASIR) soporta y monitoriza todo

```mermaid
flowchart LR
    subgraph Clientes
        Web[🌐 Web DAW]
        Movil[📱 App DAM]
    end
    
    subgraph Backend
        API[🚀 API Laravel<br/>DAW]
        DB[(💾 PostgreSQL)]
    end
    
    subgraph Infraestructura
        ASIR[⚙️ ASIR<br/>Monitorización]
    end
    
    Web -->|HTTPS| API
    Movil -->|HTTPS| API
    API --> DB
    ASIR -.->|Observa| API
    ASIR -.->|Observa| DB
```

-----

# **Capítulo 2: Diagramas de Alto Nivel**

### La vista de pájaro: Contexto, Contenedores, Despliegue

-----

## El Modelo C4

**C4 = Context, Containers, Components, Code**

Es un conjunto de abstracciones para visualizar arquitectura en diferentes niveles de zoom.

### Nivel 1: Diagrama de Contexto

**¿Qué muestra?** El sistema como caja negra y su entorno

```mermaid
flowchart TB
    Usuario[👤 Estudiantes/Profesionales]
    SistemaEmail[📧 Servicio Email<br/>SendGrid]
    
    subgraph Sistema["Sistema TaskFlow"]
        TaskFlow[📦 TaskFlow]
    end
    
    Usuario -->|Gestiona proyectos y tareas| TaskFlow
    TaskFlow -->|Envía notificaciones| SistemaEmail
```

**Perspectivas por equipo:**

:::tabs
==DAW
Tu enfoque: La API es el corazón que expone endpoints REST a todos los clientes.

==DAM
Tu enfoque: La app móvil es un cliente más que consume la API, con capacidad offline.

==ASIR
Tu enfoque: El sistema completo debe ser observable, escalable y resiliente.
:::

-----

## Nivel 2: Diagrama de Contenedores

**¿Qué muestra?** Los bloques técnicos principales del sistema

```mermaid
flowchart TB
    Usuario[👤 Usuario]
    
    subgraph TaskFlow["Sistema TaskFlow"]
        WebApp[🌐 Aplicación Web<br/>React/Vue<br/>👷 DAW Desarrolla]
        AppMovil[📱 App Móvil<br/>Kotlin/Swift<br/>👷 DAM Desarrolla]
        API[🚀 API Backend<br/>Laravel 12<br/>👷 DAW Desarrolla<br/>🔧 ASIR Despliega]
        DB[(💾 Base de Datos<br/>PostgreSQL<br/>🔧 ASIR Gestiona)]
        Queue[⚡ Sistema Colas<br/>Redis<br/>🔧 ASIR Configura]
    end
    
    Usuario -->|HTTPS| WebApp
    Usuario -->|HTTPS| AppMovil
    WebApp -->|API REST<br/>JSON/HTTPS| API
    AppMovil -->|API REST<br/>JSON/HTTPS| API
    API -->|SQL| DB
    API -->|Encola trabajos| Queue
```

-----

## Diagrama de Despliegue

**¿Qué muestra?** Dónde vive cada componente (servidores, cloud, redes)

**Responsabilidad principal: ASIR**

**Diferencias entre equipos:**

:::tabs
==DAW

Backend Laravel en EC2 + Frontend en S3 + RDS PostgreSQL con CI/CD

```mermaid
flowchart TB
    subgraph Desarrollo["💻 Desarrollo"]
        Developer[👨‍💻 Dev]
        GitLab[GitLab]
    end
    
    subgraph CI_CD["🔄 CI/CD"]
        Pipeline[Pipeline<br/>Tests + Build]
    end
    
    subgraph AWS["☁️ AWS Cloud (Región eu-west-1)"]
        subgraph VPC["VPC TaskFlow"]
            ALB[⚖️ Load Balancer<br/>:443 HTTPS]
            
            subgraph PublicSubnet["Subnet Pública"]
                WebServer1[🖥️ Web 1<br/>React]
                WebServer2[🖥️ Web 2<br/>React]
            end
            
            subgraph PrivateSubnet["Subnet Privada"]
                APIServer1[⚙️ API 1<br/>Laravel]
                APIServer2[⚙️ API 2<br/>Laravel]
                RDS[(🗄️ RDS PostgreSQL<br/>Multi-AZ)]
            end
        end
        
        S3[📦 S3 Bucket<br/>Archivos]
    end
    
    subgraph Usuarios["👥 Usuarios"]
        Users[🌐 Navegadores]
    end
    
    Developer -->|git push| GitLab
    GitLab -->|Trigger| Pipeline
    Pipeline -->|Deploy| WebServer1
    Pipeline -->|Deploy| WebServer2
    Pipeline -->|Deploy| APIServer1
    Pipeline -->|Deploy| APIServer2
    
    Users -->|HTTPS:443| ALB
    ALB --> WebServer1
    ALB --> WebServer2
    ALB --> APIServer1
    ALB --> APIServer2
    APIServer1 --> RDS
    APIServer2 --> RDS
    APIServer1 -.-> S3
    APIServer2 -.-> S3
    
    style Pipeline fill:#4caf50
    style ALB fill:#ff9800
    style WebServer1 fill:#4caf50
    style WebServer2 fill:#4caf50
    style APIServer1 fill:#2196f3
    style APIServer2 fill:#2196f3
    style RDS fill:#9c27b0,color:#fff
    style S3 fill:#ff5722,color:#fff
```

==DAM

Apps móviles distribuidas vía tiendas + Firebase + Backend con CI/CD

```mermaid
flowchart TB
    subgraph Desarrollo["📱 Desarrollo"]
        Developer[👨‍💻 Dev]
        GitLab[GitLab]
    end
    
    subgraph CI_CD["🔄 CI/CD"]
        Pipeline[Pipeline<br/>Tests + Build]
    end
    
    subgraph Distribucion["� Tiendas"]
        PlayStore[🤖 Play Store<br/>Android]
        AppStore[🍎 App Store<br/>iOS]
    end
    
    subgraph Backend["☁️ Backend"]
        API[⚙️ API Laravel<br/>taskflow-api.com]
        FCM[📨 Firebase Messaging<br/>Push]
        S3[📦 S3<br/>Archivos]
    end
    
    subgraph Usuarios["� Usuarios"]
        Android[📱 Android]
        iOS[📱 iOS]
    end
    
    Developer -->|git push| GitLab
    GitLab -->|Trigger| Pipeline
    Pipeline -->|Publish| PlayStore
    Pipeline -->|Publish| AppStore
    
    PlayStore --> Android
    AppStore --> iOS
    
    Android -->|HTTPS| API
    iOS -->|HTTPS| API
    API -->|Notifica| FCM
    FCM -->|Push| Android
    FCM -->|APNs| iOS
    Android -->|Upload| S3
    iOS -->|Upload| S3
    
    style Pipeline fill:#4caf50
    style PlayStore fill:#3ddc84
    style AppStore fill:#147efb
    style API fill:#2196f3
    style FCM fill:#ffca28
    style S3 fill:#ff5722,color:#fff
```

==ASIR

Infraestructura completa: Cloud AWS + Red física con VPN Site-to-Site

```mermaid
flowchart TB
    subgraph Internet["🌐 Internet"]
        Users[👥 Usuarios<br/>Remotos]
    end

    subgraph AWS["☁️ AWS Cloud - eu-west-1"]
        subgraph VPC["VPC 10.0.0.0/16"]
            subgraph PublicSubnet["Subnet Pública 10.0.1.0/24"]
                IGW[🌐 Internet Gateway]
                NAT[🔀 NAT Gateway]
                ALB[⚖️ Load Balancer]
            end

            subgraph PrivateSubnet1["Subnet Privada 1 (10.0.10.0/24)"]
                EC2_1[📦 EC2 Web<br/>10.0.10.50]
                EC2_2[⚙ EC2 API<br/>10.0.10.51]
            end

            subgraph PrivateSubnet2["Subnet Privada 2 (10.0.20.0/24)"]
                RDS[🗄️ RDS PostgreSQL<br/>Multi-AZ<br/>10.0.20.100]
            end

            VPN_AWS[🔐 VPN Gateway<br/>Site-to-Site]
            CloudWatch[📊 CloudWatch<br/>Monitoring]
        end
        
        S3[📦 S3<br/>Backups]
    end

    subgraph Oficina["🏢 Oficina Física"]
        subgraph Core["Core de Red"]
            Router[🔀 Router Cisco<br/>VPN Endpoint<br/>192.168.1.1]
            Firewall[🔥 Firewall<br/>pfSense]
            Switch_Core[⚡ Switch Core<br/>L3 Managed]
        end

        subgraph VLAN10["VLAN 10 - Admin<br/>192.168.10.0/24"]
            PC_Admin[💻 PC Admin<br/>192.168.10.50]
        end

        subgraph VLAN20["VLAN 20 - Dev<br/>192.168.20.0/24"]
            PC_Dev1[💻 PC Dev 1<br/>192.168.20.10]
            PC_Dev2[💻 PC Dev 2<br/>192.168.20.11]
        end

        subgraph VLAN99["VLAN 99 - Servers<br/>192.168.99.0/24"]
            Server_Local[🖥️ Server Test<br/>192.168.99.50]
        end
    end

    Users -->|HTTPS :443| IGW
    IGW --> ALB
    ALB --> EC2_1
    ALB --> EC2_2
    EC2_2 -->|:5432| RDS
    EC2_1 -.-> S3
    EC2_2 -.-> S3

    Router -->|VPN IPsec<br/>Túnel| VPN_AWS
    VPN_AWS -.->|Privado| EC2_1
    VPN_AWS -.->|Privado| EC2_2
    VPN_AWS -.->|Privado| RDS

    Router --> Firewall
    Firewall --> Switch_Core
    Switch_Core --> VLAN10
    Switch_Core --> VLAN20
    Switch_Core --> VLAN99

    PC_Admin -.->|SSH :22| Server_Local
    PC_Dev1 -.->|Git :443| EC2_2
    PC_Dev2 -.->|Git :443| EC2_2
    
    EC2_1 --> CloudWatch
    EC2_2 --> CloudWatch
    RDS --> CloudWatch
    
    style ALB fill:#ff9800
    style EC2_1 fill:#4caf50
    style EC2_2 fill:#2196f3
    style RDS fill:#9c27b0,color:#fff
    style S3 fill:#ff5722,color:#fff
    style CloudWatch fill:#ffc107
```

:::

-----

# **Capítulo 3: Diagramas Entidad-Relación (ERD)**

### El plano de la base de datos

-----

## ¿Qué es un ERD?

> Un ERD es el plano detallado de la estructura de la base de datos: tablas, columnas, tipos de datos y relaciones entre ellas.

**Propósito:** Diseñar cómo se almacenan y relacionan los datos antes de escribir una sola línea de SQL.

**Responsabilidad principal: DAW** (pero DAM y ASIR deben entenderlo)

-----

## Componentes clave

### Entidades (Tablas)

Representan conceptos del negocio: `USUARIOS`, `PROYECTOS`, `TAREAS`

### Atributos (Columnas)

Propiedades de cada entidad: `id`, `nombre`, `email`, `password_hash`

### Relaciones y Cardinalidad

- **1:1** (Uno a Uno): Un usuario tiene un perfil
- **1:N** (Uno a Muchos): Un proyecto tiene muchas tareas
- **N:M** (Muchos a Muchos): Usuarios ↔ Proyectos (requiere tabla pivote)

-----

## ERD de TaskFlow (Básico)

```mermaid
erDiagram
    USUARIOS ||--|{ PROYECTO_USUARIO : "Participa en"
    PROYECTOS ||--|{ PROYECTO_USUARIO : "Tiene"
    PROYECTOS ||--|{ TAREAS : "Contiene"
    USUARIOS ||--o{ TAREAS : "Asignado a"

    USUARIOS {
        int id PK
        string nombre
        string email UK
        string password_hash
        timestamp fecha_registro
    }
    
    PROYECTOS {
        int id PK
        string nombre
        text descripcion
        timestamp fecha_creacion
    }
    
    TAREAS {
        int id PK
        string titulo
        text descripcion
        string estado
        int proyecto_id FK
        int usuario_asignado_id FK
    }
    
    PROYECTO_USUARIO {
        int usuario_id FK
        int proyecto_id FK
        string rol
    }
```

-----

# **Capítulo 4: Diagramas de Casos de Uso**

### Definiendo QUÉ hace el sistema

-----

## ¿Qué es un Caso de Uso?

> Un caso de uso describe una funcionalidad del sistema desde la perspectiva de un actor (usuario o sistema externo).

**Propósito:** Documentar los requisitos funcionales de forma visual y comprensible.

**Responsabilidad principal: DAM** (funcionalidades móviles) y **DAW** (funcionalidades web)

-----

## Componentes

### Actores

Usuarios o sistemas externos: `Usuario Registrado`, `Administrador`, `Sistema de Email`

### Casos de Uso

Acciones que el actor puede realizar: `Iniciar Sesión`, `Crear Tarea`, `Ver Proyectos`

### Relaciones

- **`<<include>>`**: Obligatorio (Ej: Todas las acciones incluyen "Validar Autenticación")
- **`<<extend>>`**: Opcional (Ej: Crear tarea puede extenderse con "Adjuntar Archivo")
- **Herencia**: Un `Administrador` hereda las funcionalidades de `Usuario Registrado`

-----

## Diagrama de Casos de Uso - TaskFlow Mobile (Básico)

```mermaid
flowchart TD
    Usuario((👤 Usuario Móvil))
    
    subgraph Sistema["Sistema TaskFlow Mobile"]
        Login(Iniciar Sesión)
        VerProyectos(Ver Proyectos)
        VerTareas(Ver Tareas)
        MarcarCompletada(Marcar Completada)
        Sincronizar(Sincronizar Datos)
    end
    
    Usuario --> Login
    Usuario --> VerProyectos
    Usuario --> VerTareas
    Usuario --> MarcarCompletada
    
    VerProyectos -.->|include| Sincronizar
    VerTareas -.->|include| Sincronizar
```

-----

# **Capítulo 5: Diagramas de Secuencia**

### Mostrando CÓMO interactúan los componentes

-----

## ¿Qué es un Diagrama de Secuencia?

> Un diagrama de secuencia muestra la interacción entre componentes a lo largo del tiempo, en un flujo específico.

**Propósito:** Documentar el comportamiento técnico detallado de un caso de uso.

**Responsabilidad:** Todos los equipos (cada uno diseña sus flujos)

-----

## Componentes

### Participantes (Líneas de Vida)

Componentes que interactúan: `Cliente`, `API`, `Base de Datos`, `Servicio Email`

### Mensajes

- **Síncronos** (`->>`) flecha sólida: El emisor espera respuesta
- **Asíncronos** (`-)`) flecha discontinua: El emisor NO espera respuesta

### Fragmentos

- **`alt`** (alternativa): if-else
- **`loop`**: bucles (para cada elemento...)
- **`opt`**: opcional (solo si se cumple condición)
- **`par`**: paralelo (operaciones simultáneas)

-----

## Diagrama de Secuencia - Registro de Usuario

```mermaid
sequenceDiagram
    participant U as Usuario
    participant A as API
    participant B as Base de Datos
    participant E as Servicio Email
    
    U->>A: POST /api/register (email, password)
    activate A
    
    A->>B: SELECT * FROM usuarios WHERE email = ?
    activate B
    B-->>A: (vacío, no existe)
    deactivate B
    
    alt Email ya existe
        A-->>U: 409 Conflict
    else Email nuevo
        A->>A: Hash password (bcrypt)
        A->>B: INSERT INTO usuarios
        activate B
        B-->>A: Usuario creado (ID: 123)
        deactivate B
        
        A-->>U: 201 Created
        
        A-)E: Enviar email bienvenida
        Note right of A: Asíncrono: no espera respuesta
    end
    
    deactivate A
```

**Nota:** En el Capítulo 8, diseñarás flujos más complejos (añadir comentario con notificación, sincronización con conflictos).

-----

# **Capítulo 6: Herramientas Visuales**

### WYSIWYG: What You See Is What You Get

-----

## Draw.io (diagrams.net)

**Propósito:** Diagramas de todo tipo con control visual total

**Ventajas:**

- Gratuita y open source
- Integración con VS Code, Google Drive, GitHub
- Bibliotecas de iconos (AWS, Azure, UML, Redes)

**Casos de uso:**

- Diagramas de despliegue (ASIR)
- Diagramas de red física (ASIR)
- Prototipos rápidos de arquitectura

-----

## Lucidchart

**Propósito:** Colaboración en tiempo real

**Ventajas:**

- Interfaz profesional
- Comentarios y revisiones
- Templates predefinidos

**Desventajas:**

- Plan gratuito muy limitado (3 diagramas)

-----

# **Capítulo 7: Diagramas como Código (Mermaid)**

### La revolución: Versionar los diagramas con Git

-----

## ¿Qué es "Diagrams as Code" (DaC)?

> En lugar de "dibujar" un diagrama con el ratón, lo describes escribiendo texto. La herramienta genera el diagrama automáticamente.

**Ventaja clave:** El diagrama vive en un archivo `.md` que se versiona en Git junto al código.

-----

## ¿Por qué Mermaid?

**Mermaid** es el estándar moderno de diagramas como código.

**Beneficios:**

1. **Se versiona con Git**: El diagrama cambia cuando el código cambia (mismo commit)
2. **Fuente única de verdad**: No hay archivos `.png` perdidos en Google Drive
3. **Renderizado nativo**: GitHub, GitLab, VS Code, Notion lo muestran automáticamente
4. **Eficiencia**: Más rápido que arrastrar cajas manualmente

-----

## Sintaxis básica de Mermaid

### Flowcharts (Diagramas de Flujo)

```markdown
flowchart TD
    A[Inicio] --> B{¿Usuario autenticado?}
    B -->|Sí| C[Mostrar dashboard]
    B -->|No| D[Redirigir a login]
```

### ERD (Entidad-Relación)

```markdown
erDiagram
    USUARIOS ||--|{ TAREAS : "tiene asignadas"
    USUARIOS {
        int id PK
        string email UK
    }
```

### Sequence Diagrams (Diagramas de Secuencia)

```markdown
sequenceDiagram
    Cliente->>API: POST /login
    API->>BD: SELECT * FROM usuarios
    BD-->>API: Datos usuario
    API-->>Cliente: 200 OK (Token)
```

-----

# **Capítulo 8: Práctica - Diseñando TaskFlow**

### De la teoría a la práctica: Ahora sois los arquitectos

-----

## Objetivo general

Cada equipo debe crear **2 diagramas específicos** que realmente necesitaréis durante el desarrollo de TaskFlow.

**Criterio de éxito:** Los diagramas deben responder preguntas reales del proyecto y servir como contratos entre equipos.

-----

## Tareas por equipo

:::tabs
==📘 Equipo DAW

### Tarea 1: Ampliar el ERD (Capítulo 3)

**Partir de:** ERD básico de 4 entidades visto en teoría

**Ampliar con:**

- `COMENTARIOS` (1:N con TAREAS)
- `ETIQUETAS` (N:M con TAREAS)
- `ARCHIVOS_ADJUNTOS` (1:N con TAREAS)
- Modificar TAREAS: añadir `fecha_limite`, `prioridad`, `usuario_creador_id`

**Entregable:** ERD completo de 7 entidades + consultas SQL de ejemplo

### Tarea 2: Diagrama de Secuencia - Añadir Comentario con Notificación

**Diseñar flujo:**

1. Usuario añade comentario a tarea
2. Sistema valida autenticación y permisos
3. Sistema inserta comentario en BD
4. Sistema envía notificación al usuario asignado (asíncrono)
5. Websocket actualiza UI en tiempo real

**Entregable:** Diagrama con `alt`, `activate`, mensajes síncronos/asíncronos + controlador Laravel

==📗 Equipo DAM

### Tarea 1: Ampliar Casos de Uso (Capítulo 4)

**Partir de:** Diagrama básico con funcionalidades esenciales

**Ampliar con:**

- Gestionar Comentarios (añadir, ver, editar)
- Adjuntar Archivos (solo Usuario Premium)
- Recibir Notificaciones Push
- Filtrar Tareas por Etiqueta
- Configurar Preferencias Offline

**Entregable:** 12+ casos de uso, 3 actores (Usuario, Usuario Premium, Sistema Notificaciones), relaciones `<<include>>`, `<<extend>>`, herencia

### Tarea 2: Sincronización con Resolución de Conflictos (Capítulo 5)

**Escenario complejo:**

- Usuario A modifica tarea offline → sincroniza primero (versión 2)
- Usuario B modifica misma tarea offline → intenta sincronizar (409 Conflict)
- Sistema muestra diálogo de resolución de conflicto

**Entregable:** Diagrama con `par`, `alt`, `opt` + código Kotlin de versioning

==📕 Equipo ASIR

### Tarea 1: Despliegue Multi-Entorno (Capítulo 2B)

**Diseñar 3 entornos:**

- **Desarrollo:** Minimalista (~30€/mes)
- **Staging:** Intermedio (~60€/mes)
- **Producción:** Completo con HA, Auto Scaling, Redis (~180€/mes)

**Incluir:**

- Pipeline CI/CD (GitHub Actions → DEV → STAGING → PROD)
- 3 VPCs separadas con subnets públicas/privadas
- Security Groups específicos por entorno

**Entregable:** Diagrama multi-entorno + justificación de costos + IaC (Terraform/CloudFormation)

### Tarea 2: Red Híbrida Cloud + Oficina (Capítulo 2B)

**Diseñar:**

- **Cloud AWS:** VPC 10.0.0.0/16 con subnets
- **Oficina Física:** 4 VLANs (Admin, Dev, Testing, Servers)
- **VPN Site-to-Site IPsec:** Router Cisco ↔ AWS VPN Gateway

**Incluir:**

- Tabla completa de reglas de firewall por VLAN
- Security Groups AWS para acceso desde VPN
- Plan de routing estático

**Entregable:** Diagrama híbrido + firewall rules + DRP (Disaster Recovery Plan)
:::

</SlidesViewer>
