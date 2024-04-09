import FromBalise from "../asset/FromBalise";
import "../../style/employees-from.scss";
import FromBaliseSelect from "../asset/FromBaliseSelect";
import DatePickerA from "../asset/DatePickerA";
function EmployeesFrom () {
    return(
        <section className="from-section">
            <h2>Create Employee</h2>
            <from>
                <div className="base-flex gap2">
                    <div className="base-flex-col gap">
                        <FromBalise labelname={"First Name"} inputType={"text"}/>
                        <FromBalise labelname={"Last Name"} inputType={"text"}/>
                        <DatePickerA placeholderInput={"Date of Birth"}/>
                        <DatePickerA placeholderInput={"Start Date"} />

                    </div>
                    <fieldset>
                        <legend>Address</legend>
                        <FromBalise labelname={"Street"} inputType={"text"}/>
                        <FromBalise labelname={"City"} inputType={"text"}/>
                        <FromBaliseSelect labelname={"State"}/>
                        <FromBalise labelname={"Zip code"} inputType={"number"}/>
                    </fieldset>
                </div>
                <FromBaliseSelect labelname={"Department"}/>
            </from>
            <button>Save</button>
        </section>);
}

export default EmployeesFrom;