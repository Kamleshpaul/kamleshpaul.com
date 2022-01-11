import Head from 'next/head'

export default function Home() {
  return (
    <>
      <Head>
        <title>Kamlesh Paul - Home</title>
      </Head>
      <div id="wapper">
        <div className="name">
          <div className="glitch" data-text="Kamlesh Paul">Kamlesh Paul</div>
          <h4 className="center title">Laravel and Reactjs Developer</h4>
        </div>

        <div className="social">
          <div className="animate__animated animate__rotateInDownLeft delay-2s">
            <a target="_blank" href="https://github.com/Kamleshpaul" rel="noreferrer">
              <img
                src="/icons/github-brands.svg"
                alt="github"
                width="50"
              />
            </a>
          </div>

          <div className="animate__animated animate__rotateInUpLeft delay-3s">
            <a
              target="_blank"
              href="https://in.linkedin.com/in/kamlesh-paul" rel="noreferrer"
            >
              <img
                src="/icons/linkedin-in-brands.svg"
                alt="linkedin"
                width="45"
              />
            </a>
          </div>

          <div className="animate__animated animate__rotateInUpRight delay-4s">
            <a
              target="_blank"
              href="https://stackoverflow.com/users/10834466/kamlesh-paul?tab=profile" rel="noreferrer"
            >
              <img
                src="/icons/stackoverflow.svg"
                alt="stack-overflow"
                width="45"
              />
            </a>
          </div>

          <div className="animate__animated animate__rotateInDownRight delay-5s">
            <a
              target="_blank"
              href="https://twitter.com/kamlesh_paul26" rel="noreferrer"
            >
              <img
                src="/icons/twitter-brands.svg"
                alt="twitter"
                width="50"
              />
            </a>
          </div>
        </div>
      </div>
    </>
  )
}