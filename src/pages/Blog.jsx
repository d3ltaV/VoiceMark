export default function Blog() {
  return (
    <article className="blog-panel">
      <header className="blog-head">
        <p className="blog-meta">October 15, 2026</p>
        <h1 className="blog-title">Blog 1: Introducing VoiceMark</h1>
      </header>

      <section className="blog-section">
        <h2>Why We Do What We Do</h2>
        <p>
          Widespread sexism and discrimination spur problems that may change the course of many
          women's lives. Approximately 1 out of 3 women, or 840 million women, have experienced
          physical or sexual violence worldwide, and studies have revealed that women in
          relationships with men who held patriarchal beliefs are more likely to experience
          domestic violence. Moreover, 20% of women are victims of child marriage. In the United
          States, roughly 1 in 5 women have experienced rape (or attempted rape), and in the same
          vein, 81% of women report having been sexually harassed or assaulted. A third of women
          have their healthcare providers dismiss their symptoms or pain, and nearly a quarter of
          women in the US experience violence from an intimate partner.
        </p>
        <p>
          Despite these pervasive, disturbing experiences&mdash;and the fact that women make up
          half the world's population&mdash;women appear or are heard in only 26% of global
          broadcast, radio, and print news clips worldwide. Ultimately, this lack of female
          representation leads to a less equal democracy. It is thus vital for women's stories to
          be disseminated throughout the world.
        </p>
      </section>

      <section className="blog-section">
        <h2>Our Work</h2>
        <p>
          We have recently launched our social enterprise VoiceMark. Our mission is to raise
          awareness of these demographic issues, empower women, and help women feel seen and
          heard. We are highlighting individual women's stories by translating them into art, and
          we will share these stories with the world by printing these artworks on sustainable
          bags and hosting them on our website.
        </p>
        <p>
          We have sketched an exemplary art piece that communicates Malala Yousafzai's journey, a
          human rights activist for girls' education and Nobel Peace Prize laureate. After being
          shot by the Taliban, who prohibited her education, and recovering in a hospital in
          England, she earned global support. As a teenager, she began speaking out, advocating
          for every girl to be educated. One of her most famous quotes at the 2013 UN Youth
          Assembly is: <em>&ldquo;One child, one teacher, one book, and one pen can change the
          world.&rdquo;</em> The wings represent the platform and freedom that education gives
          her.
        </p>
        <figure className="blog-figure">
          <img src={`${import.meta.env.BASE_URL}malala.webp`} alt="Illustration of Malala Yousafzai with wings, writing in a book and speaking into a microphone." />
        </figure>
        <p>
          We have also recently scheduled an interview with Alyssa Hunt, an individual who has
          suffered from dismissal regarding endometriosis. This is a chronic disease that affects
          1 in 10 women, or 190 million women worldwide, yet is severely under-researched. It
          inflicts extreme pain during menstruation, and there is no cure. Endometriosis studies
          are underfunded: in 2022, the National Institutes of Health only allocated $16 million
          to its research, or 0.038% of its budget. Despite this fact, there have been studies
          focused on trivial topics, such as rating the &ldquo;attractiveness&rdquo; of
          endometriosis patients (without their consent and from a male perspective). We will
          highlight both Alyssa's journey with chronic pain and the work she has done as the
          Program Director for the Alice Paul Center for Gender Justice.
        </p>
        <p>
          Moreover, we have established contact with two local organizations dedicated to
          supporting domestic abuse survivors, which is an issue that predominantly affects
          women. We are working with Resilience Center in Franklin County and Safe Passage, both
          of which are non-profit advocacy organizations, to reach out to and connect with women
          who have suffered from domestic violence.
        </p>
        <p>
          We have also interviewed Dr. Ashanda Saint Jean, a physician with over 20 years of
          experience who is focused on equity, care for women of color, and maternal health. She
          recounted how her sister has been dismissed when going to hospitals, and how some of
          her patients have worked with her after facing the same negligence; this can largely
          stem from racial discrimination in the healthcare system. Dr. Saint Jean also advocates
          for a stronger support system for mothers, and especially for their mental health
          during pregnancy, which is the leading cause of maternal death. She helped start the
          WMCHealth Network's Center to Advance Women's Health Equity and also serves on the New
          York City Maternal Mortality Review Board.
        </p>
        <p>
          Finally, we will be sharing these stories both on our website and by printing them on a
          sustainable tote bag. We have partnered with ATS Manufacturing, a medical, local
          manufacturing company located in Holyoke, to produce our bags. Our material of choice
          was hemp fabric. Hemp is a natural plant fiber that is sourced from the hemp plant, and
          it exhibits similar properties to linen. It's a durable fabric, 8 times stronger than
          other fabrics used for daily wear. It's sustainable because growing it is fast and
          doesn't exhaust soil nutrients; in fact, it regenerates the soil and also sequesters
          carbon dioxide from the atmosphere (more than many types of trees). Hemp also has
          antimicrobial and thermoregulating properties. Thus, we decided to use it as a vessel
          for the stories we are sharing.
        </p>
      </section>

      <section className="blog-section">
        <h2>Upcoming Activities</h2>
        <p>
          In the near future, we will be conducting interviews with Alyssa Hunt to learn more
          about her experiences and her work, as well as the Resilience Center. We will continue
          our outreach to different organizations and try to connect with women who have
          personally experienced social injustice or who have worked to combat it. Moreover, we
          will be creating a portrait piece of Alyssa and writing about her journey on our
          website. We will also reach out to Dr. Saint Jean and propose to do the same for her.
          Finally, we will begin manufacturing our first eco-friendly tote bag with ATS
          Manufacturing.
        </p>
      </section>

      <section className="blog-section blog-sources">
        <h2>Sources</h2>
        <ul>
          <li>
            Amnesty International. (2024). <em>Women's rights.</em>{' '}
            <a href="https://www.amnesty.org/en/what-we-do/discrimination/womens-rights/" target="_blank" rel="noreferrer">amnesty.org</a>
          </li>
          <li>
            CBC. (2020, August 6). <em>Study rating the &ldquo;attractiveness&rdquo; of endometriosis
            patients pulled after 7 years.</em>{' '}
            <a href="https://www.cbc.ca/radio/asithappens/as-it-happens-the-thursday-edition-1.5676573/study-rating-the-attractiveness-of-endometriosis-patients-pulled-after-7-years-1.5676895" target="_blank" rel="noreferrer">cbc.ca</a>
          </li>
          <li>
            Ellis, K., Munro, D., &amp; Clarke, J. (2022). Endometriosis is undervalued: A call to
            action. <em>Frontiers in Global Women's Health, 3</em>(902371).{' '}
            <a href="https://doi.org/10.3389/fgwh.2022.902371" target="_blank" rel="noreferrer">doi.org</a>
          </li>
          <li>
            UN Women. (2025, September 4). <em>Half the world, only a quarter of the news.</em>{' '}
            <a href="https://www.unwomen.org/en/news-stories/press-release/2025/09/half-the-world-only-a-quarter-of-the-news" target="_blank" rel="noreferrer">unwomen.org</a>
          </li>
          <li>
            Schupak, A. (2026, September 19). <em>Many women report being &ldquo;dismissed&rdquo; by
            doctors.</em> ABC7 Bay Area.{' '}
            <a href="https://abc7news.com/post/many-women-report-being-dismissed-doctors-problems-extend-far-beyond-exam-room/19848409/" target="_blank" rel="noreferrer">abc7news.com</a>
          </li>
          <li>
            S.R, V. (2022, November 25). <em>What to know about hemp fabric.</em> WebMD.{' '}
            <a href="https://www.webmd.com/a-to-z-guides/what-to-know-about-hemp-fabric" target="_blank" rel="noreferrer">webmd.com</a>
          </li>
          <li>
            National Sexual Violence Resource Center. (2017, October 13). <em>Statistics.</em>{' '}
            <a href="https://www.nsvrc.org/statistics/" target="_blank" rel="noreferrer">nsvrc.org</a>
          </li>
          <li>
            Touro University. (2024, July 18). <em>Ashanda M. Saint Jean, M.D. &rsquo;98, shaping
            the future of inclusive women's wellness.</em>{' '}
            <a href="https://www.nymc.edu/newsroom/stories/chironian-2024-saint-jean.php" target="_blank" rel="noreferrer">nymc.edu</a>
          </li>
          <li>
            UN Women. (2024, November 25). <em>Facts and figures: Ending violence against women.</em>{' '}
            <a href="https://www.unwomen.org/en/articles/facts-and-figures/facts-and-figures-ending-violence-against-women" target="_blank" rel="noreferrer">unwomen.org</a>
          </li>
          <li>
            United Nations. (2017). <em>Malala Yousafzai.</em>{' '}
            <a href="https://www.un.org/en/messengers-peace/malala-yousafzai" target="_blank" rel="noreferrer">un.org</a>
          </li>
          <li>
            World Health Organization. (2023). <em>Endometriosis.</em>{' '}
            <a href="https://www.who.int/news-room/fact-sheets/detail/endometriosis" target="_blank" rel="noreferrer">who.int</a>
          </li>
        </ul>
      </section>
    </article>
  )
}
