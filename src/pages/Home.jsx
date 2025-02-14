import "../styles/home.css";

function Home() {
  return (
    <>
      <div className="heading">
        <h1 className="heading-h1">Connect.Learn.Earn</h1>
        <p>
          Your data is a portfoli asset. With Earnware you control what
          <br />
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Data
          to share anonymously and carn from it.
        </p>
      </div>
      <div className="card1">
        <div className="card1-header">Your Earning</div>
        <h1>$ 30.00</h1>
        <p>Next Payout In:</p>
        <h3>10,550 pts</h3>
      </div>
      <div className="card2">
        <h2>Connect Sources</h2>
          <img src="/294706_circle_linkedin_icon.png" className="linkedin-img"/>
          <img src="/294712_circle_youtube_icon.png" className="youtube-img"/>
          <img src="/294709_circle_twitter_icon.png" className="twitter-img"/>
      </div>
      <div className="card3">
        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Consequuntur, non? Voluptatem magni nesciunt accusamus voluptatibus. Repellat aspernatur ut asperiores praesentium quod, magnam accusantium ea voluptas doloribus odit, adipisci m</p>
          <h4>Learn more from your data and make better decision</h4>
          <div className="learnmore-icon">
            <h1>➡️</h1>
          </div>
      </div>
    </>
  );
}

export default Home;
