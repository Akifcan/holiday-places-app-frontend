## Description

[Udemy](https://www.udemy.com/course/nextjs-ve-apollo-ile-proje-gelistiriyoruz/?couponCode=BABA790C2A272B6A55C8)

Merhaba, React.js ve Next.js kullanarak geliştireceğimiz projemize hoş geldiniz. Bu projemizde Graphql kullanarak bir tatil yerlerini listelediğimiz uygulama geliştireceğiz. Uygulamamızın akışı şu şekilde olacak. İlk önce 81 tane ili listeleyeceğiz ve seçilen ile eklenen tatil yerleri, gezilecek yerler vs. görüntülenebilecek. Daha görüntülenen yerlere yorum yapma özelliğini ekleyeceğiz. Yapılan yorumların ortalaması verilen her yıldızın yüzdesini de ayrı bir şekilde göstereceğiz. Ayrıca mekan ekleme sayfasını da oluşturacağız bu sayfamız için ve yorum ekleme modalımız için kullanabileceğimiz bir validation sınıfı oluşturacağız. Bu oluşturacağımız validation sınıfını daha sonra kullanacağımız yerlere de hızlıca entegre edebiliriz. İlk önce ara yüzü oluşturduktan sonra Apollo ile bağlantımızı kuracağız. Projemizde kullanacağımız backend projesine hazır olarak erişebilirsiniz. Github repository linkini ekleyeceğim. Backend için sadece veritabanı kurulumu yapmak yeterli olacak. Backend uygulaması mongodb kullanıyor o yüzden mongodb atlas üzerinden veritabanı oluşturabiliriz. Kullanacağımız teknolojiler ise şu şekilde olacak:

- React.js

- Next.js

- Apollo Graphql

- Timeago.js

- Chakra UI

Ayrıca graphql query ve mutationlarımızı hazır olarak Github'a ekleyeceğim oradan kopyalayıp uygulamamız içerisinde kullanabilirsiniz. Backend uygulamamız nest.js kullanarak çalışıyor o yüzden ilk önce bilgisayarınıza nest.js'i yükleyin. Fakat backend tarafında her hangi bir şekilde işlem yapmayacağız sadece projemizi ayağa kaldıracağız. Bu serimiz tamamen frontend development üzerine olacak. Kursun genel akışı ise şu şekilde:

Gerekli kurulumların yapılması.

Ara yüz

Validation Sınıfı

Backend ile bağlantı

This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `pages/index.tsx`. The page auto-updates as you edit the file.

[API routes](https://nextjs.org/docs/api-routes/introduction) can be accessed on [http://localhost:3000/api/hello](http://localhost:3000/api/hello). This endpoint can be edited in `pages/api/hello.ts`.

The `pages/api` directory is mapped to `/api/*`. Files in this directory are treated as [API routes](https://nextjs.org/docs/api-routes/introduction) instead of React pages.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
