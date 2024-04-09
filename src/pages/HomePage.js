import Header from "../component/Header";
import LinkBtn from "../component/asset/LinkBtn";
import EmployeesFrom from "../component/employees-components/EmployeesFrom";
function HomePage () {
    return(
        <div className="base-flex-col">
            <Header title={"HRnet"}/>
            <LinkBtn slug={"employee-list"} linkName={"View Current Employees"}/>
            <EmployeesFrom/>
        </div>
    );
}
export default HomePage;