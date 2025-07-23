import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import Icon from '@/components/ui/icon';

const Index = () => {
  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  const services = [
    {
      title: 'Мебель LOFT',
      description: 'Изготовление стильной индустриальной мебели в стиле лофт',
      icon: 'Hammer',
      image: '/img/7c0ec6e6-2136-4e6d-8590-faade28ccc00.jpg'
    },
    {
      title: 'Лазерная резка',
      description: 'Точная резка профильных труб и металлических изделий',
      icon: 'Zap',
      image: '/img/34cf7ad3-aec0-43bd-a9a3-2e2fd61dbc49.jpg'
    },
    {
      title: 'Порошковая окраска',
      description: 'Качественная покраска по каталогу RAL любых цветов',
      icon: 'Palette',
      image: '/img/80b9b12b-a26b-4fc9-93c7-35137f91d3a3.jpg'
    },
    {
      title: 'Лазерная сварка',
      description: 'Профессиональная сварка металлических конструкций',
      icon: 'Flame',
      image: '/img/34cf7ad3-aec0-43bd-a9a3-2e2fd61dbc49.jpg'
    }
  ];

  const products = [
    { name: 'Столы LOFT', price: 'от 15 000 ₽' },
    { name: 'Стеллажи', price: 'от 12 000 ₽' },
    { name: 'Барные стойки', price: 'от 25 000 ₽' },
    { name: 'Металлокаркасы', price: 'от 8 000 ₽' }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-charcoal/95 backdrop-blur-sm z-50 border-b border-burnt/20">
        <div className="container mx-auto px-6 py-4">
          <div className="flex justify-between items-center">
            <div className="text-2xl font-bold text-white">PRISMA</div>
            <div className="hidden md:flex space-x-8">
              {['Услуги', 'Изделия', 'О нас', 'Контакты'].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item.toLowerCase())}
                  className="text-white hover:text-burnt transition-colors duration-300 font-medium"
                >
                  {item}
                </button>
              ))}
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center bg-gradient-to-r from-charcoal to-rust text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="container mx-auto px-6 text-center relative z-10">
          <h1 className="text-6xl md:text-8xl font-bold mb-6 leading-tight">
            ИНДУСТРИАЛЬНЫЙ
            <br />
            <span className="text-burnt">ДИЗАЙН</span>
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto leading-relaxed">
            Создаем уникальную мебель в стиле LOFT. Лазерная резка, сварка и порошковая окраска — 
            полный цикл производства металлических изделий
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg" 
              className="bg-burnt hover:bg-burnt/90 text-white px-8 py-4 text-lg font-semibold transition-all duration-300 hover:scale-105"
              onClick={() => scrollToSection('услуги')}
            >
              Наши услуги
            </Button>
            <Button 
              variant="outline" 
              size="lg"
              className="border-2 border-white text-white hover:bg-white hover:text-charcoal px-8 py-4 text-lg font-semibold transition-all duration-300"
              onClick={() => scrollToSection('контакты')}
            >
              Связаться с нами
            </Button>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="услуги" className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <h2 className="text-5xl font-bold text-center mb-16 text-charcoal">
            Наши <span className="text-burnt">услуги</span>
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <Card key={index} className="group hover:shadow-2xl transition-all duration-300 hover:scale-105 border-0 overflow-hidden">
                <div className="h-48 bg-gradient-to-br from-charcoal to-rust relative overflow-hidden">
                  <img 
                    src={service.image} 
                    alt={service.title}
                    className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity duration-300"
                  />
                  <div className="absolute inset-0 bg-charcoal/40 flex items-center justify-center">
                    <Icon name={service.icon} size={48} className="text-white" />
                  </div>
                </div>
                <CardHeader>
                  <CardTitle className="text-xl font-bold text-charcoal">{service.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">{service.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section id="изделия" className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <h2 className="text-5xl font-bold text-center mb-16 text-charcoal">
            Наши <span className="text-burnt">изделия</span>
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {products.map((product, index) => (
              <Card key={index} className="group hover:shadow-xl transition-all duration-300 hover:scale-105">
                <div className="h-48 bg-gradient-to-br from-industrial to-rust/20 flex items-center justify-center">
                  <Icon name="Package" size={64} className="text-charcoal/60 group-hover:text-burnt transition-colors duration-300" />
                </div>
                <CardHeader>
                  <CardTitle className="text-xl font-bold text-charcoal">{product.name}</CardTitle>
                  <p className="text-2xl font-bold text-burnt">{product.price}</p>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="о нас" className="py-20 bg-charcoal text-white">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-5xl font-bold mb-8">
              О <span className="text-burnt">нашей мастерской</span>
            </h2>
            <p className="text-xl leading-relaxed mb-8">
              Мы специализируемся на создании уникальной мебели и металлических изделий в индустриальном стиле LOFT. 
              Используем современное оборудование для лазерной резки и сварки, обеспечивая высочайшее качество продукции.
            </p>
            <div className="grid md:grid-cols-3 gap-8 mt-12">
              <div className="text-center">
                <div className="text-4xl font-bold text-burnt mb-2">5+</div>
                <p>лет опыта</p>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-burnt mb-2">200+</div>
                <p>довольных клиентов</p>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-burnt mb-2">50+</div>
                <p>видов изделий</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="контакты" className="py-20 bg-gray-100">
        <div className="container mx-auto px-6">
          <h2 className="text-5xl font-bold text-center mb-16 text-charcoal">
            <span className="text-burnt">Контакты</span>
          </h2>
          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12">
              <div>
                <h3 className="text-2xl font-bold mb-6 text-charcoal">Свяжитесь с нами</h3>
                <div className="space-y-4">
                  <div className="flex items-center space-x-4">
                    <Icon name="Phone" size={24} className="text-burnt" />
                    <span className="text-lg">+7 (xxx) xxx-xx-xx</span>
                  </div>
                  <div className="flex items-center space-x-4">
                    <Icon name="Mail" size={24} className="text-burnt" />
                    <span className="text-lg">info@loftmebel.ru</span>
                  </div>
                  <div className="flex items-center space-x-4">
                    <Icon name="MapPin" size={24} className="text-burnt" />
                    <span className="text-lg">г. Москва, ул. Промышленная, 15</span>
                  </div>
                  <div className="flex items-center space-x-4">
                    <Icon name="Clock" size={24} className="text-burnt" />
                    <span className="text-lg">Пн-Пт: 9:00-18:00</span>
                  </div>
                </div>
              </div>
              <div>
                <h3 className="text-2xl font-bold mb-6 text-charcoal">Отправить заявку</h3>
                <div className="space-y-4">
                  <input 
                    type="text" 
                    placeholder="Ваше имя" 
                    className="w-full p-4 border border-gray-300 rounded-lg focus:border-burnt focus:outline-none"
                  />
                  <input 
                    type="tel" 
                    placeholder="Телефон" 
                    className="w-full p-4 border border-gray-300 rounded-lg focus:border-burnt focus:outline-none"
                  />
                  <textarea 
                    placeholder="Опишите ваш проект" 
                    rows={4}
                    className="w-full p-4 border border-gray-300 rounded-lg focus:border-burnt focus:outline-none"
                  ></textarea>
                  <Button className="w-full bg-burnt hover:bg-burnt/90 text-white py-4 text-lg font-semibold">
                    Отправить заявку
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-charcoal text-white py-8">
        <div className="container mx-auto px-6 text-center">
          <div className="text-2xl font-bold mb-4">
            LOFT<span className="text-burnt">MEBEL</span>
          </div>
          <p className="text-gray-400">© 2024 LoftMebel. Все права защищены.</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;