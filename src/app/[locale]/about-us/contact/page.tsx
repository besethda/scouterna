import ContentSection from "@/components/ContentSection"

const Contact = () => {
  return (
    <div>

      <ContentSection sectionLayout={["h", "s", "p", "s", "p"]} page={"email"} background={"blue"}/>
      <ContentSection sectionLayout={["h", "s", "p", "s", "p"]} page={"bank"}/>
    </div>
  )
}

export default Contact