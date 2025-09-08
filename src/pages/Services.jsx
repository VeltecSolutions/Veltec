import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Code, 
  Users, 
  Building, 
  Smartphone,
  ArrowRight,
  CheckCircle,
  Star,
  Zap,
  Shield,
  Clock,
  Globe,
  Database,
  BarChart3,
  Smartphone as Mobile,
  Cloud,
  Lock,
  TrendingUp,
  Target,
  Rocket
} from 'lucide-react';

const Services = () => {
  const [activeService, setActiveService] = useState(0);

  const services = [
    {
      id: 'desarrollo',
      icon: Code,
      title: 'Desarrollo de Software a la Medida',
      subtitle: 'Soluciones personalizadas que se adaptan perfectamente a tu negocio',
      description: 'Creamos aplicaciones web y móviles personalizadas que se integran perfectamente con tus procesos existentes. Nuestro enfoque ágil garantiza entregas rápidas y de alta calidad.',
      features: [
        'Aplicaciones web y móviles nativas',
        'Sistemas de gestión empresarial (ERP)',
        'Integración con sistemas existentes',
        'APIs RESTful y GraphQL',
        'Arquitectura escalable y mantenible',
        'Soporte y mantenimiento continuo'
      ],
      technologies: ['React', 'Node.js', 'Python', 'React Native', 'PostgreSQL', 'AWS'],
      color: 'from-blue-500 to-purple-600',
      bgColor: 'bg-blue-50'
    },
    {
      id: 'talento-humano',
      icon: Users,
      title: 'VeltPro',
      subtitle: 'Gestión integral del talento humano con automatización inteligente',
      description: 'Nuestra plataforma SaaS especializada en gestión de talento humano automatiza todos los procesos de RRHH, desde la liquidación de nóminas hasta el control de asistencia y cálculo de prestaciones.',
      features: [
        'Liquidación de nóminas automatizada',
        'Control de ingresos y salidas en tiempo real',
        'Cálculo preciso de horas trabajadas',
        'Gestión de vacaciones y prestaciones',
        'Cálculo automático de prima y cesantías',
        'Reportes y analytics avanzados'
      ],
      technologies: ['Angular', 'Java', 'Postgres', 'Redis', 'Docker', 'Kubernetes'],
      color: 'from-green-500 to-blue-600',
      bgColor: 'bg-green-50'
    },
    {
      id: 'inmobiliario',
      icon: Building,
      title: 'VelSuite',
      subtitle: 'Cotizador inmobiliario avanzado para constructores y desarrolladores',
      description: 'Herramienta especializada para el sector inmobiliario que permite cotizar proyectos, gestionar reservas y separaciones, y mantener un control completo del inventario de propiedades.',
      features: [
        'Cotizador de proyectos inmobiliarios',
        'Sistema de reservas y separaciones',
        'Gestión de inventario en tiempo real',
        'Reportes y analytics de ventas',
        'Integración con CRM inmobiliario',
        'Dashboard ejecutivo personalizable'
      ],
      technologies: ['React.js', 'Java', 'MySQL', 'Redis', 'MongoDB', 'AWS'],
      color: 'from-orange-500 to-red-600',
      bgColor: 'bg-orange-50'
    },
    {
      id: 'spas',
      icon: Smartphone,
      title: 'SPAs Avanzadas',
      subtitle: 'Aplicaciones web modernas con experiencia de usuario excepcional',
      description: 'Desarrollamos Single Page Applications (SPAs) que ofrecen una experiencia de usuario fluida y moderna, con navegación instantánea y interfaces intuitivas.',
      features: [
        'Interfaz de usuario moderna y responsiva',
        'Navegación fluida sin recargas',
        'Carga rápida de contenido',
        'Experiencia móvil optimizada',
        'Integración con APIs externas',
        'PWA (Progressive Web App) capabilities'
      ],
      technologies: ['React', 'Vue.js', 'Angular', 'TypeScript', 'Tailwind CSS', 'Vite', 'Animate'],
      color: 'from-purple-500 to-pink-600',
      bgColor: 'bg-purple-50'
    }
  ];

  const benefits = [
    {
      icon: Zap,
      title: 'Desarrollo Ágil',
      description: 'Metodologías ágiles para entregas rápidas y eficientes'
    },
    {
      icon: Shield,
      title: 'Seguridad Avanzada',
      description: 'Implementamos las mejores prácticas de seguridad'
    },
    {
      icon: Clock,
      title: 'Soporte 24/7',
      description: 'Equipo de soporte técnico disponible cuando lo necesites'
    },
    {
      icon: Globe,
      title: 'Escalabilidad',
      description: 'Arquitecturas diseñadas para crecer con tu negocio'
    },
    {
      icon: Database,
      title: 'Integración',
      description: 'Conectamos con tus sistemas existentes'
    },
    {
      icon: BarChart3,
      title: 'Analytics',
      description: 'Reportes y métricas para tomar decisiones informadas'
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white overflow-hidden">
        <div className="absolute inset-0 bg-hero-pattern opacity-10"></div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center"
            initial="hidden"
            animate="visible"
            variants={containerVariants}
          >
            <motion.h1
              variants={itemVariants}
              className="text-4xl md:text-5xl lg:text-6xl font-bold font-poppins mb-6"
            >
              Nuestros <span className="gradient-text">Servicios</span>
            </motion.h1>
            
            <motion.p
              variants={itemVariants}
              className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto"
            >
              Soluciones tecnológicas especializadas diseñadas para impulsar el crecimiento de tu negocio
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Services Navigation */}
      <section className="py-8 bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-4">
            {services.map((service, index) => (
              <motion.button
                key={service.id}
                onClick={() => setActiveService(index)}
                className={`px-6 py-3 rounded-xl font-semibold transition-all duration-300 ${
                  activeService === index
                    ? `bg-gradient-to-r ${service.color} text-white shadow-lg`
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <service.icon className="w-5 h-5 inline mr-2" />
                {service.title.split(' ')[0]}
              </motion.button>
            ))}
          </div>
        </div>
      </section>

      {/* Active Service Details */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            key={activeService}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
          >
            {/* Service Info */}
            <div>
              <div className={`w-20 h-20 bg-gradient-to-r ${services[activeService].color} rounded-2xl flex items-center justify-center mb-6 shadow-glow`}>
                {React.createElement(services[activeService].icon, { className: "w-10 h-10 text-white" })}
              </div>
              
              <h2 className="text-3xl md:text-4xl font-bold font-poppins text-gray-900 mb-4">
                {services[activeService].title}
              </h2>
              
              <p className="text-xl text-gray-600 mb-6">
                {services[activeService].subtitle}
              </p>
              
              <p className="text-gray-700 mb-8 leading-relaxed">
                {services[activeService].description}
              </p>

              {/* Features */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
                {services[activeService].features.map((feature, index) => (
                  <motion.div
                    key={index}
                    className="flex items-start"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">{feature}</span>
                  </motion.div>
                ))}
              </div>

              {/* Technologies */}
              <div className="mb-8">
                <h4 className="text-lg font-semibold text-gray-900 mb-4">Tecnologías utilizadas:</h4>
                <div className="flex flex-wrap gap-2">
                  {services[activeService].technologies.map((tech, index) => (
                    <motion.span
                      key={tech}
                      className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm font-medium"
                      initial={{ opacity: 0, scale: 0 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: index * 0.1 }}
                    >
                      {tech}
                    </motion.span>
                  ))}
                </div>
              </div>

              <motion.button
                className="btn-primary"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Solicitar Cotización
                <ArrowRight className="ml-2 w-5 h-5" />
              </motion.button>
            </div>

            {/* Service Visual */}
            <div className={`${services[activeService].bgColor} rounded-3xl p-8 relative overflow-hidden`}>
              <div className="absolute inset-0 bg-gradient-to-br from-white/20 to-transparent"></div>
              
              <motion.div
                className="relative z-10"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                <div className="grid grid-cols-2 gap-6">
                  {[1, 2, 3, 4].map((item) => (
                    <motion.div
                      key={item}
                      className="bg-white rounded-xl p-6 shadow-lg"
                      animate={{ 
                        y: [0, -10, 0],
                        rotate: [0, 2, -2, 0]
                      }}
                      transition={{ 
                        duration: 3,
                        repeat: Infinity,
                        delay: item * 0.5
                      }}
                    >
                      <div className={`w-12 h-12 bg-gradient-to-r ${services[activeService].color} rounded-lg flex items-center justify-center mb-4`}>
                        <Star className="w-6 h-6 text-white" />
                      </div>
                      <h4 className="font-semibold text-gray-900 mb-2">Característica {item}</h4>
                      <p className="text-sm text-gray-600">Descripción de la característica principal</p>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold font-poppins text-gray-900 mb-4">
              Beneficios de trabajar con nosotros
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Más que desarrollo, ofrecemos una experiencia completa de transformación digital
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <motion.div
                key={benefit.title}
                className="text-center p-8 rounded-2xl bg-gray-50 hover:bg-white hover:shadow-lg transition-all duration-300"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05 }}
              >
                <div className="w-16 h-16 bg-gradient-to-r from-primary-500 to-secondary-500 rounded-full flex items-center justify-center mx-auto mb-6 shadow-glow">
                  <benefit.icon className="w-8 h-8 text-white" />
                </div>
                
                <h3 className="text-xl font-semibold font-poppins text-gray-900 mb-4">
                  {benefit.title}
                </h3>
                
                <p className="text-gray-600 leading-relaxed">
                  {benefit.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-primary-500 to-secondary-500">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold font-poppins text-white mb-6">
              ¿Tienes un proyecto en mente?
            </h2>
            <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
              Cuéntanos sobre tu idea y te ayudaremos a convertirla en una solución tecnológica exitosa
            </p>
            
            <motion.button
              className="bg-white text-primary-600 px-8 py-4 rounded-xl font-semibold text-lg hover:shadow-lg transition-all duration-300"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Iniciar Proyecto
              <Rocket className="ml-2 w-5 h-5 inline" />
            </motion.button>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Services;
