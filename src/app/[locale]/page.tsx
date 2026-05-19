'use client'

import useMessages from "@/hook/useMessages";
import CardWithImage from "@/components/CardWithImage";

const Home = () => {
  const messages = useMessages()
  
  if (!messages) {
    return null
  }

  return (
    <div >
      <CardWithImage headline={messages?.homePageCard?.headline} logo="/heartIcon.png" title={messages?.homePageCard?.title} text={messages?.homePageCard?.text} image="/images/IMG_9122.jpeg" />
    </div>
  );
}

export default Home