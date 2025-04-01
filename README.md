# Çok Dilli Next.js Uygulaması

Bu proje, Next.js kullanılarak geliştirilmiş çok dilli (i18n) bir web uygulamasıdır. Almanca (de), İngilizce (en) ve Türkçe (tr) dil desteği sunar.

## Özellikler

- Next.js 15.2.4 ile geliştirildi
- React 19 ve TypeScript 5 desteği
- next-intl 4.0.2 ile uluslararasılaştırma desteği
- Tailwind CSS 4 ile stil yönetimi
- Radix UI bileşenleri entegrasyonu
- Dinamik dil değiştirme özelliği
- Responsive tasarım

## Kurulum

1. Projeyi klonlayın:
```bash
git clone https://github.com/bymcs/i18n-app.git
cd i18n-app
```

2. Bağımlılıkları yükleyin:
```bash
pnpm install
# veya
npm install
# veya
yarn install
```

3. Geliştirme sunucusunu başlatın:
```bash
pnpm dev
# veya
npm run dev
# veya
yarn dev
```

## Kullanım

Uygulamayı çalıştırdıktan sonra tarayıcıda http://localhost:3000 adresini açın.

Dil değiştirmek için sağ üst köşedeki dil seçicisini kullanabilirsiniz.

## Desteklenen Diller

- Almanca (de)
- İngilizce (en)
- Türkçe (tr)

## Katkıda Bulunma

Katkıda bulunmak isterseniz:

1. Fork oluşturun
2. Yeni bir branch oluşturun (`git checkout -b yeni-ozellik`)
3. Değişikliklerinizi commit edin (`git commit -am 'Yeni özellik eklendi'`)
4. Branch'i pushlayın (`git push origin yeni-ozellik`)
5. Pull Request oluşturun
