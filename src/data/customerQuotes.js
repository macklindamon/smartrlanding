export const customerQuotes = [
  {
    quote: "Smartr365 has completely transformed how we handle mortgages. Our processing time has decreased by 60% and client satisfaction has never been higher.",
    author: "Sarah Williams",
    company: "Premier Mortgage Solutions"
  },
  {
    quote: "The automation features save us hours every day. We can now focus on what matters most - providing excellent advice to our clients.",
    author: "James Mitchell",
    company: "Mitchell Financial Services"
  },
  {
    quote: "Since implementing Smartr365, our compliance processes are seamless and our team productivity has increased dramatically.",
    author: "Emma Thompson",
    company: "Thompson & Associates"
  },
  {
    quote: "The integrated lender connections have revolutionized our sourcing process. We get better rates faster than ever before.",
    author: "David Chen",
    company: "Chen Mortgage Brokers"
  },
  {
    quote: "Our clients love the transparency and digital tools. It's made us stand out in a competitive market.",
    author: "Rachel Davies",
    company: "Davies Property Finance"
  }
];

export const getRandomQuote = () => {
  const randomIndex = Math.floor(Math.random() * customerQuotes.length);
  return customerQuotes[randomIndex];
};