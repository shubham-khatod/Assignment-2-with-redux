import { useSelector } from "react-redux";
import "./Display.css";
const Display = () => {
  const details = useSelector((state) => state.userData.userDetails);
  return (
    <table>
      <thead>
        <tr>
          <th>First Name </th>
          <th>Last Name</th>
        </tr>
      </thead>
      <tbody>
        { details.length >0 ? (
          details.map((obj, index) => {
            return (
              <tr key={index}>
                <td>{obj.firstName}</td>
                <td>{obj.lastName}</td>
              </tr>
            );
          })
        ) : (
          <tr>
            <th colSpan={2}>No data found</th>
          </tr>
        )}
      </tbody>
    </table>
  );
};

export default Display;
