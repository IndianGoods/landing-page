import { Logos3 } from "@/components/ui/logos3"

const demoData = {
  heading: "Trusted by 10,000+ businesses across India",
  logos: [
    {
      id: "logo-1",
      description: "Razorpay",
      image: "https://razorpay.com/assets/razorpay-logo.svg",
      className: "h-8 w-auto opacity-60 hover:opacity-100 transition-opacity",
    },
    {
      id: "logo-2",
      description: "Shiprocket", 
      image: "https://shiprocket.in/wp-content/uploads/2019/07/shiprocket-logo.png",
      className: "h-8 w-auto opacity-60 hover:opacity-100 transition-opacity",
    },
    {
      id: "logo-3",
      description: "Paytm",
      image: "https://logos-world.net/wp-content/uploads/2020/11/Paytm-Logo.png", 
      className: "h-8 w-auto opacity-60 hover:opacity-100 transition-opacity",
    },
    {
      id: "logo-4",
      description: "PhonePe",
      image: "https://www.phonepe.com/webstatic/6.8.0/images/logo.svg",
      className: "h-8 w-auto opacity-60 hover:opacity-100 transition-opacity",
    },
    {
      id: "logo-5",
      description: "Zomato",
      image: "https://b.zmtcdn.com/web_assets/b40b97e677bc7b2ca77c58c61db266fe1603954218.png",
      className: "h-8 w-auto opacity-60 hover:opacity-100 transition-opacity",
    },
    {
      id: "logo-6",
      description: "Swiggy",
      image: "https://1000logos.net/wp-content/uploads/2021/05/Swiggy-logo.png",
      className: "h-8 w-auto opacity-60 hover:opacity-100 transition-opacity",
    },
    {
      id: "logo-7",
      description: "Flipkart", 
      image: "https://logos-world.net/wp-content/uploads/2020/11/Flipkart-Logo.png",
      className: "h-6 w-auto opacity-60 hover:opacity-100 transition-opacity",
    },
    {
      id: "logo-8",
      description: "Amazon",
      image: "https://logos-world.net/wp-content/uploads/2020/04/Amazon-Logo.png",
      className: "h-8 w-auto opacity-60 hover:opacity-100 transition-opacity",
    },
    {
      id: "logo-9",
      description: "Myntra",
      image: "https://logos-world.net/wp-content/uploads/2020/11/Myntra-Logo.png",
      className: "h-8 w-auto opacity-60 hover:opacity-100 transition-opacity",
    },
    {
      id: "logo-10",
      description: "BigBasket",
      image: "https://www.bigbasket.com/media/uploads/p/l/bb-logo-website.png",
      className: "h-8 w-auto opacity-60 hover:opacity-100 transition-opacity",
    },
  ],
};

function Logos3Demo() {
  return <Logos3 {...demoData} />;
}

export { Logos3Demo };