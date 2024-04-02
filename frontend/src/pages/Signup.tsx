import { Auth } from "../components/signup/Auth";
import { Quote } from "../components/Quote";
const Signup = () => {
  return (
    <div>
      <div className="grid grid-cols-1 lg:grid-cols-2">
        <div>
          <Auth />
        </div>
        <div>
          <Quote />
        </div>
      </div>
    </div>
  );
};

export default Signup;
