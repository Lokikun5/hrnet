import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addEmployee } from '../../redux/employees/actions';
import { DatePicker } from "antd";
import FromBalise from "../asset/FromBalise";
import FromBaliseSelect from "../asset/FromBaliseSelect";
import Modal from "../asset/Modal";
import employee_role from "../../datas/employee-role";
import states from "../../datas/states";
import "../../style/employees-from.scss";

// Format dates for role list and department list
function EmployeesFrom() {

    const dispatch = useDispatch();

    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [dateOfBirth, setDateOfBirth] = useState(null);
    const [startDate, setStartDate] = useState(null);
    const [street, setStreet] = useState('');
    const [city, setCity] = useState('');
    const [state, setState] = useState('');
    const [zipCode, setZipCode] = useState('');
    const [department, setDepartment] = useState('');

    const [errorMessage, setErrorMessage] = useState('');

    const [isModalOpen, setIsModalOpen] = useState(false);

    const saveEmployee = () => {

        setErrorMessage('');

        if (!firstName ||!lastName || !dateOfBirth ||
            !startDate || !street || !city || !state || !zipCode || !department ) {
            setErrorMessage("please complete all fields");
            return;
        }
        setIsModalOpen(true);

        const newEmployee = {
            firstName,
            lastName,
            dateOfBirth: dateOfBirth ? dateOfBirth.format('YYYY-MM-DD') : '',
            startDate: startDate ? startDate.format('YYYY-MM-DD') : '',
            address: {
                street,
                city,
                state: state.name,
                stateAbbreviation: state.abbreviation,
                zipCode
            },
            department,
        };
        console.log(newEmployee);
        dispatch(addEmployee(newEmployee));
    };

    const closeModal = () => {
        setIsModalOpen(false);
    };

// formatting for select option employee role end department
    const roleOptions = employee_role.map(role => ({
        value: role.role,
        label: role.role
    }));

    const stateOptions = states.map(state => ({
        value: state.abbreviation,
        label: state.name
    }));

    return (
        <section className="from-section">
            <h2>Create Employee</h2>
            {errorMessage && <div className="base-flex error-message">{errorMessage}</div>}
            <form>
                <div className="base-flex gap2">
                    <div className="base-flex-col gap">
                        <FromBalise labelname={"First Name"} inputType={"text"}
                                    value={firstName} onChange={(e) => setFirstName(e.target.value)}/>
                        <FromBalise labelname={"Last Name"} inputType={"text"}
                                    value={lastName} onChange={(e) => setLastName(e.target.value)}/>
                        <DatePicker placeholder={"Date of Birth"}
                                    value={dateOfBirth} onChange={(date) => setDateOfBirth(date)}
                                    format={"YYYY-MM-DD"}/>
                        <DatePicker placeholder={"Start Date"}
                                    value={startDate} onChange={(date) => setStartDate(date)}
                                    format={"YYYY-MM-DD"}/>
                    </div>
                    <fieldset>
                        <legend>Address</legend>
                        <FromBalise labelname={"Street"} inputType={"text"}
                                    value={street} onChange={(e) => setStreet(e.target.value)}/>
                        <FromBalise labelname={"City"} inputType={"text"}
                                    value={city} onChange={(e) => setCity(e.target.value)}/>

                        <FromBaliseSelect labelname={"State"} options={stateOptions}
                                          value={state.abbreviation}
                                          onChange={(e) => {
                            const selectedState = states.find(state => state.abbreviation === e.target.value);
                            setState(selectedState || {});
                        }}/>

                        <FromBalise labelname={"Zip code"} inputType={"number"}
                                    value={zipCode} onChange={(e) => setZipCode(e.target.value)}/>
                    </fieldset>
                </div>
                <FromBaliseSelect labelname={"Department"} options={roleOptions}
                                  value={department} onChange={(e) => setDepartment(e.target.value)}/>
            </form>
            <div className="base-flex mt-1">
                <button onClick={saveEmployee} className="link">Save</button>
            </div>
            <Modal isOpen={isModalOpen} onClose={closeModal}>
                <p>The employee "{firstName} {lastName}" has been validated !</p>
            </Modal>
        </section>

    );
}

export default EmployeesFrom;
