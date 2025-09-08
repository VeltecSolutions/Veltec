import React from 'react';
import { motion } from 'framer-motion';
import { 
  Users, 
  Target, 
  Award, 
  TrendingUp,
  Heart,
  Lightbulb,
  Shield,
  Clock,
  Globe,
  Code,
  Rocket,
  Star,
  CheckCircle,
  ArrowRight,
  Quote
} from 'lucide-react';

const About = () => {
  const stats = [
    { number: '50+', label: 'Proyectos Completados', icon: Rocket },
    { number: '30+', label: 'Clientes Satisfechos', icon: Users },
    { number: '5+', label: 'Años de Experiencia', icon: Award },
    { number: '100%', label: 'Compromiso', icon: Heart }
  ];

  const values = [
    {
      icon: Lightbulb,
      title: 'Innovación',
      description: 'Siempre buscamos las mejores tecnologías y metodologías para crear soluciones únicas.',
      color: 'from-yellow-400 to-orange-500'
    },
    {
      icon: Shield,
      title: 'Calidad',
      description: 'Nos comprometemos a entregar productos de la más alta calidad y rendimiento.',
      color: 'from-blue-500 to-purple-600'
    },
    {
      icon: Users,
      title: 'Colaboración',
      description: 'Trabajamos estrechamente con nuestros clientes para entender sus necesidades.',
      color: 'from-green-500 to-blue-600'
    },
    {
      icon: Target,
      title: 'Resultados',
      description: 'Enfocados en generar valor real y medible para el crecimiento de tu negocio.',
      color: 'from-red-500 to-pink-600'
    }
  ];

  const team = [
    {
      name: 'Alejandro López Oliveros',
      role: 'CEO & Fundador',
      image: '/src/assets/profile.jpeg',
      description: 'Más de 10 años de experiencia en desarrollo de software y liderazgo tecnológico.'
    }
    // {
    //   name: 'María González',
    //   role: 'CTO',
    //   image: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?w=300&h=300&fit=crop&crop=face',
    //   description: 'Especialista en arquitecturas escalables y tecnologías emergentes.'
    // },
    // {
    //   name: 'David Rodríguez',
    //   role: 'Lead Developer',
    //   image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=300&h=300&fit=crop&crop=face',
    //   description: 'Experto en desarrollo full-stack y metodologías ágiles.'
    // },
    // {
    //   name: 'Ana Martínez',
    //   role: 'UX/UI Designer',
    //   image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=300&h=300&fit=crop&crop=face',
    //   description: 'Diseñadora especializada en experiencias de usuario excepcionales.'
    // }
  ];

  const timeline = [
    {
      year: '2019',
      title: 'Fundación de Veltec Solutions',
      description: 'Iniciamos nuestro viaje con la visión de transformar negocios a través de la tecnología.'
    },
    {
      year: '2020',
      title: 'Primer SaaS - TalentFlow Pro',
      description: 'Lanzamos nuestra primera plataforma SaaS para gestión de talento humano.'
    },
    {
      year: '2021',
      title: 'Expansión del Equipo',
      description: 'Crecimos nuestro equipo de desarrolladores y diseñadores especializados.'
    },
    {
      year: '2022',
      title: 'PropertyQuote Launch',
      description: 'Desarrollamos y lanzamos nuestro cotizador inmobiliario especializado.'
    },
    {
      year: '2023',
      title: 'Reconocimiento del Mercado',
      description: 'Alcanzamos 30+ clientes satisfechos y 50+ proyectos completados.'
    },
    {
      year: '2024',
      title: 'Innovación Continua',
      description: 'Seguimos innovando con nuevas tecnologías y mejores prácticas.'
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
              Sobre <span className="gradient-text">Nosotros</span>
            </motion.h1>
            
            <motion.p
              variants={itemVariants}
              className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto"
            >
              Somos un equipo apasionado por crear soluciones tecnológicas que transforman negocios
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-bold font-poppins text-gray-900 mb-6">
                Nuestra Misión
              </h2>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                En Veltec Solutions, nos dedicamos a crear soluciones tecnológicas innovadoras que 
                impulsen el crecimiento y la transformación digital de nuestros clientes. Creemos 
                que la tecnología debe ser un facilitador, no una barrera.
              </p>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                Nuestro enfoque se centra en entender profundamente las necesidades de cada cliente 
                para desarrollar software que realmente genere valor y mejore sus procesos de negocio.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <motion.button
                  className="btn-primary"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Conocer Nuestro Equipo
                  <ArrowRight className="ml-2 w-5 h-5" />
                </motion.button>
              </div>
            </motion.div>

            <motion.div
              className="relative"
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <div className="bg-gradient-to-br from-primary-500 to-secondary-500 rounded-3xl p-8 text-white">
                <Quote className="w-12 h-12 mb-6 opacity-80" />
                <blockquote className="text-xl font-medium mb-6 leading-relaxed">
                  "La tecnología debe servir al negocio, no al revés. Por eso creamos soluciones 
                  que realmente resuelven problemas y generan valor."
                </blockquote>
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center mr-4">
                    <Users className="w-6 h-6" />
                  </div>
                  <div>
                    <p className="font-semibold">Carlos Velásquez</p>
                    <p className="text-white/80">CEO & Fundador</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-gradient-to-r from-primary-500 to-secondary-500">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
            initial="hidden"
            whileInView="visible"
            variants={containerVariants}
            viewport={{ once: true }}
          >
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                variants={itemVariants}
                className="text-center text-white"
              >
                <div className="w-20 h-20 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4 backdrop-blur-sm">
                  <stat.icon className="w-10 h-10" />
                </div>
                <div className="text-4xl md:text-5xl font-bold font-poppins mb-2">
                  {stat.number}
                </div>
                <div className="text-white/90 font-medium">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Values Section */}
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
              Nuestros Valores
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Los principios que guían cada decisión y cada proyecto que desarrollamos
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                className="text-center p-8 rounded-2xl bg-gray-50 hover:bg-white hover:shadow-lg transition-all duration-300"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05 }}
              >
                <div className={`w-16 h-16 bg-gradient-to-r ${value.color} rounded-full flex items-center justify-center mx-auto mb-6 shadow-glow`}>
                  <value.icon className="w-8 h-8 text-white" />
                </div>
                
                <h3 className="text-xl font-semibold font-poppins text-gray-900 mb-4">
                  {value.title}
                </h3>
                
                <p className="text-gray-600 leading-relaxed">
                  {value.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold font-poppins text-gray-900 mb-4">
              Nuestro Equipo
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Conoce a los profesionales que hacen posible nuestras soluciones innovadoras
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <motion.div
                key={member.name}
                className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05 }}
              >
                <div className="relative mb-6">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-24 h-24 rounded-full mx-auto object-cover"
                  />
                  <div className="absolute -bottom-2 -right-2 w-8 h-8 bg-gradient-to-r from-primary-500 to-secondary-500 rounded-full flex items-center justify-center">
                    <CheckCircle className="w-5 h-5 text-white" />
                  </div>
                </div>
                
                <h3 className="text-xl font-semibold font-poppins text-gray-900 mb-2">
                  {member.name}
                </h3>
                
                <p className="text-primary-600 font-medium mb-4">
                  {member.role}
                </p>
                
                <p className="text-gray-600 text-sm leading-relaxed">
                  {member.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline Section */}
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
              Nuestra Historia
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Un viaje de crecimiento, innovación y transformación digital
            </p>
          </motion.div>

          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-primary-500 to-secondary-500"></div>
            
            <div className="space-y-12">
              {timeline.map((item, index) => (
                <motion.div
                  key={item.year}
                  className={`flex items-center ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <div className={`w-1/2 ${index % 2 === 0 ? 'pr-8 text-right' : 'pl-8 text-left'}`}>
                    <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100">
                      <div className="text-2xl font-bold text-primary-600 mb-2">
                        {item.year}
                      </div>
                      <h3 className="text-xl font-semibold text-gray-900 mb-3">
                        {item.title}
                      </h3>
                      <p className="text-gray-600 leading-relaxed">
                        {item.description}
                      </p>
                    </div>
                  </div>
                  
                  <div className="w-8 h-8 bg-gradient-to-r from-primary-500 to-secondary-500 rounded-full flex items-center justify-center relative z-10 shadow-lg">
                    <Clock className="w-4 h-4 text-white" />
                  </div>
                  
                  <div className="w-1/2"></div>
                </motion.div>
              ))}
            </div>
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
              ¿Quieres formar parte de nuestra historia?
            </h2>
            <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
              Únete a nosotros y juntos crearemos el futuro de la tecnología
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.button
                className="bg-white text-primary-600 px-8 py-4 rounded-xl font-semibold text-lg hover:shadow-lg transition-all duration-300"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Ver Vacantes
                <Users className="ml-2 w-5 h-5 inline" />
              </motion.button>
              
              <motion.button
                className="border-2 border-white text-white px-8 py-4 rounded-xl font-semibold text-lg hover:bg-white hover:text-primary-600 transition-all duration-300"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Contactar Equipo
                <ArrowRight className="ml-2 w-5 h-5 inline" />
              </motion.button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default About;
