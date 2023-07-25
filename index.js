const Notification = (props) => {
  const { image, title, bgCss } = props;
  return (
    <div className={`card ${bgCss}`}>
      <img src={image} alt={title} className="imageCss" />
      <p className="card-title">{title}</p>
    </div>
  );
  //  Write your code here.
};

const element = (
  <div className="bg-container">
    <h1 className="heading">Notifications</h1>
    <Notification
      image="https://assets.ccbp.in/frontend/react-js/primary-icon-img.png"
      title="Information Message"
      bgCss="information"
    />
    <Notification
      image="https://assets.ccbp.in/frontend/react-js/success-icon-img.png"
      title="Success Message"
      bgCss="success"
    />
    <Notification
      image="https://assets.ccbp.in/frontend/react-js/warning-icon-img.png"
      title="Warning Message"
      bgCss="warning"
    />
    <Notification
      image="https://assets.ccbp.in/frontend/react-js/danger-icon-img.png"
      title="Error Message"
      bgCss="error"
    />
  </div>
);

ReactDOM.render(element, document.getElementById("root"));
