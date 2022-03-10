import Form from "../../Form/Form";
import MessageBar from "../../common/MessageBar/MessageBar";

function SignUp(props) {
  const { title, content } = props;

  return (
    <div className="sign-up">
      <div className="sign-up__section">
        <div className="sign-up__left-wrap">
          <div className="sign-up__left">
            <h2>{title}</h2>
            <p>{content}</p>
          </div>
        </div>
        <div className="sign-up__right-wrap">
          <div className="sign-up__right">
            <MessageBar content="Try it free 7 days then $20/mo. thereafter" />
            <Form
              btnLabel="Claim your free trial"
              footerLabel="By clicking the button, you are agreeomg to our Terms and Services"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default SignUp;
