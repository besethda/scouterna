import Instagram from "./Instagram"

type instaType = {
  "biography": string,
  "profilePictureUrl": string,
  "website": string,
  "followersCount": number,
  "followsCount": number,
  "posts": {}
}

const InstagramContainer = async () => {

  const response = await fetch("https://feeds.behold.so/3JS61tNj0rPJBZc2QNTD")

  return (
    <div className="">
      <Instagram />
    </div>
  )
}

export default InstagramContainer