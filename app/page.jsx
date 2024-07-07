import Feed from "@components/Feed"

const home = () => {
  return (
    <section className="w-full flex-center flex-col">
        <h1 className="head_text text-center">
            Explore & Share
            <br className="max-md:hidden"/>
            <span className="orange_gradient text-center">Tech Insights</span>
        </h1>
        <p className="desc text-center">
          TechTalk is your go-to open-source platform for discovering, creating, and sharing innovative tech-related posts. Dive into a world of technology where enthusiasts and professionals come together to share their knowledge and insights.
        </p>

        <Feed />
    </section>
  )
}

export default home