import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Mail, 
  Phone, 
  MapPin, 
  Clock,
  Send,
  CheckCircle,
  AlertCircle,
  MessageCircle,
  Calendar,
  User,
  Building,
  Globe,
  ArrowRight,
  Sparkles
} from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    nombre: '',
    email: '',
    telefono: '',
    empresa: '',
    servicio: '',
    mensaje: '',
    presupuesto: '',
    timeline: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const services = [
    'Desarrollo de Software a la Medida',
    'TalentFlow Pro - SaaS Talento Humano',
    'PropertyQuote - SaaS Inmobiliario',
    'SPAs Avanzadas',
    'Consultoría Tecnológica',
    'Mantenimiento y Soporte'
  ];

  const budgets = [
    'Menos de $5,000 USD',
    '$5,000 - $15,000 USD',
    '$15,000 - $50,000 USD',
    '$50,000 - $100,000 USD',
    'Más de $100,000 USD',
    'Por definir'
  ];

  const timelines = [
    'Urgente (1-2 semanas)',
    'Rápido (1 mes)',
    'Normal (2-3 meses)',
    'Flexible (3+ meses)',
    'Por definir'
  ];

  const contactInfo = [
    {
      icon: Mail,
      title: 'Email Corporativo',
      value: 'veltecsolutions@outlook.com',
      description: 'Respuesta en menos de 24 horas',
      color: 'from-blue-500 to-purple-600'
    },
    {
      icon: Phone,
      title: 'Teléfono',
      value: '+57 301 784 2687',
      description: 'Lunes a Viernes 8AM - 6PM',
      color: 'from-green-500 to-blue-600'
    },
    {
      icon: MapPin,
      title: 'Ubicación',
      value: 'Colombia',
      description: 'Servicios en toda Latinoamérica',
      color: 'from-orange-500 to-red-600'
    },
    {
      icon: Clock,
      title: 'Horario',
      value: '24/7 Soporte',
      description: 'Disponibilidad para proyectos urgentes',
      color: 'from-purple-500 to-pink-600'
    }
  ];

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simular envío del formulario
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitStatus('success');
      
      // Crear mensaje para WhatsApp
      const whatsappMessage = createWhatsAppMessage(formData);
      const whatsappUrl = `https://wa.me/573017842687?text=${encodeURIComponent(whatsappMessage)}`;
      
      // Mostrar opciones de contacto
      showContactOptions(whatsappUrl, formData);
      
      // Reset form
      setFormData({
        nombre: '',
        email: '',
        telefono: '',
        empresa: '',
        servicio: '',
        mensaje: '',
        presupuesto: '',
        timeline: ''
      });
    }, 2000);
  };

  const createWhatsAppMessage = (data) => {
    return `Hola Veltec Solutions! 👋

Me interesa conocer más sobre sus servicios:

📋 *Información de contacto:*
• Nombre: ${data.nombre}
• Email: ${data.email}
• Teléfono: ${data.telefono || 'No proporcionado'}
• Empresa: ${data.empresa || 'No proporcionado'}

🎯 *Servicio de interés:*
${data.servicio}

💰 *Presupuesto estimado:*
${data.presupuesto}

⏰ *Timeline:*
${data.timeline}

💬 *Mensaje:*
${data.mensaje}

¡Espero su respuesta para coordinar una reunión!`;
  };

  const showContactOptions = (whatsappUrl, data) => {
    // Aquí se podría mostrar un modal con opciones de contacto
    // Por ahora, abrimos directamente WhatsApp
    window.open(whatsappUrl, '_blank');
  };

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
              <span className="gradient-text">Contáctanos</span>
            </motion.h1>
            
            <motion.p
              variants={itemVariants}
              className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto"
            >
              ¿Listo para impulsar tu negocio? Estamos aquí para ayudarte a convertir tu idea en realidad
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Contact Info Cards */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {contactInfo.map((info, index) => (
              <motion.div
                key={info.title}
                className="text-center p-6 rounded-2xl bg-gray-50 hover:bg-white hover:shadow-lg transition-all duration-300"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05 }}
              >
                <div className={`w-16 h-16 bg-gradient-to-r ${info.color} rounded-full flex items-center justify-center mx-auto mb-4 shadow-glow`}>
                  <info.icon className="w-8 h-8 text-white" />
                </div>
                
                <h3 className="text-lg font-semibold font-poppins text-gray-900 mb-2">
                  {info.title}
                </h3>
                
                <p className="text-primary-600 font-medium mb-2">
                  {info.value}
                </p>
                
                <p className="text-gray-600 text-sm">
                  {info.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Form */}
            <motion.div
              className="bg-white rounded-3xl p-8 shadow-xl"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <div className="mb-8">
                <h2 className="text-3xl font-bold font-poppins text-gray-900 mb-4">
                  Cuéntanos sobre tu proyecto
                </h2>
                <p className="text-gray-600">
                  Completa el formulario y nos pondremos en contacto contigo en menos de 24 horas
                </p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Nombre completo *
                    </label>
                    <div className="relative">
                      <User className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                      <input
                        type="text"
                        name="nombre"
                        value={formData.nombre}
                        onChange={handleInputChange}
                        required
                        className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all duration-300"
                        placeholder="Tu nombre completo"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Email *
                    </label>
                    <div className="relative">
                      <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                        className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all duration-300"
                        placeholder="tu@email.com"
                      />
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Teléfono
                    </label>
                    <div className="relative">
                      <Phone className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                      <input
                        type="tel"
                        name="telefono"
                        value={formData.telefono}
                        onChange={handleInputChange}
                        className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all duration-300"
                        placeholder="+57 300 123 4567"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Empresa
                    </label>
                    <div className="relative">
                      <Building className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                      <input
                        type="text"
                        name="empresa"
                        value={formData.empresa}
                        onChange={handleInputChange}
                        className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all duration-300"
                        placeholder="Nombre de tu empresa"
                      />
                    </div>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Servicio de interés *
                  </label>
                  <select
                    name="servicio"
                    value={formData.servicio}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all duration-300"
                  >
                    <option value="">Selecciona un servicio</option>
                    {services.map((service) => (
                      <option key={service} value={service}>
                        {service}
                      </option>
                    ))}
                  </select>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Presupuesto estimado
                    </label>
                    <select
                      name="presupuesto"
                      value={formData.presupuesto}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all duration-300"
                    >
                      <option value="">Selecciona un rango</option>
                      {budgets.map((budget) => (
                        <option key={budget} value={budget}>
                          {budget}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Timeline del proyecto
                    </label>
                    <select
                      name="timeline"
                      value={formData.timeline}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all duration-300"
                    >
                      <option value="">Selecciona un timeline</option>
                      {timelines.map((timeline) => (
                        <option key={timeline} value={timeline}>
                          {timeline}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Mensaje *
                  </label>
                  <div className="relative">
                    <MessageCircle className="absolute left-3 top-3 w-5 h-5 text-gray-400" />
                    <textarea
                      name="mensaje"
                      value={formData.mensaje}
                      onChange={handleInputChange}
                      required
                      rows={5}
                      className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all duration-300 resize-none"
                      placeholder="Cuéntanos sobre tu proyecto, objetivos y cualquier detalle importante..."
                    />
                  </div>
                </div>

                <motion.button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full btn-primary text-lg py-4 flex items-center justify-center"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  {isSubmitting ? (
                    <>
                      <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
                      Enviando...
                    </>
                  ) : (
                    <>
                      Enviar Mensaje
                      <Send className="ml-2 w-5 h-5" />
                    </>
                  )}
                </motion.button>

                {submitStatus === 'success' && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="flex items-center p-4 bg-green-50 border border-green-200 rounded-xl"
                  >
                    <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                    <span className="text-green-700">¡Mensaje enviado exitosamente!</span>
                  </motion.div>
                )}
              </form>
            </motion.div>

            {/* Contact Methods */}
            <motion.div
              className="space-y-8"
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              {/* WhatsApp */}
              <div className="bg-gradient-to-r from-green-500 to-green-600 rounded-2xl p-8 text-white">
                <div className="flex items-center mb-6">
                  <MessageCircle className="w-8 h-8 mr-3" />
                  <h3 className="text-2xl font-bold font-poppins">WhatsApp Corporativo</h3>
                </div>
                <p className="text-green-100 mb-6">
                  ¿Prefieres una conversación más directa? Escríbenos por WhatsApp y te responderemos inmediatamente.
                </p>
                <motion.a
                  href="https://wa.me/573017842687?text=Hola%20Veltec%20Solutions,%20me%20interesa%20conocer%20más%20sobre%20sus%20servicios"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center bg-white text-green-600 px-6 py-3 rounded-xl font-semibold hover:bg-green-50 transition-colors duration-300"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <MessageCircle className="w-5 h-5 mr-2" />
                  Chatear por WhatsApp
                </motion.a>
              </div>

              {/* Email Direct */}
              <div className="bg-gradient-to-r from-blue-500 to-purple-600 rounded-2xl p-8 text-white">
                <div className="flex items-center mb-6">
                  <Mail className="w-8 h-8 mr-3" />
                  <h3 className="text-2xl font-bold font-poppins">Email Directo</h3>
                </div>
                <p className="text-blue-100 mb-6">
                  Envíanos un email directamente y recibirás una respuesta detallada en menos de 24 horas.
                </p>
                <motion.a
                  href="mailto:veltecsolutions@outlook.com?subject=Consulta%20sobre%20servicios%20Veltec%20Solutions"
                  className="inline-flex items-center bg-white text-blue-600 px-6 py-3 rounded-xl font-semibold hover:bg-blue-50 transition-colors duration-300"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Mail className="w-5 h-5 mr-2" />
                  Enviar Email
                </motion.a>
              </div>

              {/* Calendar */}
              <div className="bg-gradient-to-r from-purple-500 to-pink-600 rounded-2xl p-8 text-white">
                <div className="flex items-center mb-6">
                  <Calendar className="w-8 h-8 mr-3" />
                  <h3 className="text-2xl font-bold font-poppins">Agendar Reunión</h3>
                </div>
                <p className="text-purple-100 mb-6">
                  ¿Prefieres una videollamada? Agenda una reunión de 30 minutos para discutir tu proyecto.
                </p>
                <motion.button
                  className="inline-flex items-center bg-white text-purple-600 px-6 py-3 rounded-xl font-semibold hover:bg-purple-50 transition-colors duration-300"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Calendar className="w-5 h-5 mr-2" />
                  Agendar Videollamada
                </motion.button>
              </div>

              {/* Why Choose Us */}
              <div className="bg-gray-900 rounded-2xl p-8 text-white">
                <div className="flex items-center mb-6">
                  <Sparkles className="w-8 h-8 mr-3 text-primary-400" />
                  <h3 className="text-2xl font-bold font-poppins">¿Por qué elegirnos?</h3>
                </div>
                <ul className="space-y-4">
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-green-400 mr-3 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-300">Respuesta garantizada en menos de 24 horas</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-green-400 mr-3 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-300">Consulta inicial gratuita</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-green-400 mr-3 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-300">Propuesta personalizada sin compromiso</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-green-400 mr-3 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-300">Soporte técnico especializado</span>
                  </li>
                </ul>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
