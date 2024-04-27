import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addNewItem } from '../../redux/redux_method/actions';
import { DatePicker } from "antd";
import FromBalise from "../asset/FromBalise";
import Select from 'react-select';
import Modal from 'react-modal';
import settings from "../../data_setting/settings";
import "../../style/datas-from.scss";
import Legend from "../asset/Legend";
import ValidationMessage from "../asset/ValidationMessage";
import SectionTitle from "../asset/SectionTitle";

function DatasFrom() {
    const dispatch = useDispatch();
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [birthDayDate, setBirthDayDate] = useState(null);
    const [startDayDate, setStartDayDate] = useState(null);
    const [street, setStreet] = useState('');
    const [city, setCity] = useState('');
    const [state, setState] = useState('');
    const [zipCode, setZipCode] = useState('');
    const [department, setDepartment] = useState('');

    const [errorMessage, setErrorMessage] = useState('');
    const [isModalOpen, setIsModalOpen] = useState(false);

    const saveNewEntries = () => {
        setErrorMessage('');

        if (!firstName || !lastName || !birthDayDate ||
            !startDayDate || !street || !city || !state || !zipCode || !department) {
            setErrorMessage("Please complete all fields");
            return;
        }
        setIsModalOpen(true);

        const newEntries = {
            firstName,
            lastName,
            birthDayDate: birthDayDate ? birthDayDate.format('YYYY-MM-DD') : '',
            startDayDate: startDayDate ? startDayDate.format('YYYY-MM-DD') : '',
            fieldsetValue: {
                street,
                city,
                states: settings.HomePage.getSelectDataByAbbreviation(state),
                state,
                zipCode
            },
            department,
        };
        console.log(newEntries)
        dispatch(addNewItem(newEntries));
    };

    const customStyles = {
        content: {
            top: '50%',
            left: '50%',
            right: 'auto',
            bottom: 'auto',
            marginRight: '-50%',
            transform: 'translate(-50%, -50%)',
        },
    };

    const closeModal = () => {
        setIsModalOpen(false);
    };

    const handleStateChange = selectedOption => {
        setState(selectedOption ? selectedOption.value : '');
    };

    const handleDepartmentChange = selectedOption => {
        setDepartment(selectedOption ? selectedOption.value : '');
    };

    return (
        <section className="from-section">
            <SectionTitle title={settings.HomePage.section_title} />
            {errorMessage && <div className="base-flex error-message">{errorMessage}</div>}
            <form>
                <div className="base-flex gap2">
                    <div className="base-flex-col gap">
                        <FromBalise labelname={settings.HomePage.label_name1}
                                    inputType={settings.HomePage.from_tag_type_text}
                                    value={firstName}
                                    onChange={(e) => setFirstName(e.target.value)}/>
                        <FromBalise labelname={settings.HomePage.label_name2}
                                    inputType={settings.HomePage.from_tag_type_text}
                                    value={lastName}
                                    onChange={(e) => setLastName(e.target.value)}/>
                        <DatePicker placeholder={settings.HomePage.date_picker_placeholder1}
                                    value={birthDayDate}
                                    onChange={(date) => setBirthDayDate(date)}
                                    format={settings.HomePage.date_picker_format}/>
                        <DatePicker placeholder={settings.HomePage.date_picker_placeholder2}
                                    value={startDayDate}
                                    onChange={(date) => setStartDayDate(date)}
                                    format={settings.HomePage.date_picker_format}/>
                    </div>
                    <fieldset>
                        <Legend legendTitle={settings.HomePage.fieldset_title}/>
                        <FromBalise labelname={settings.HomePage.label_name3}
                                    inputType={settings.HomePage.from_tag_type_text}
                                    value={street} onChange={(e) => setStreet(e.target.value)}/>
                        <FromBalise labelname={settings.HomePage.label_name4}
                                    inputType={settings.HomePage.from_tag_type_text}
                                    value={city} onChange={(e) => setCity(e.target.value)}/>

                        <Select
                            options={settings.HomePage.getSelectData2()}
                            value={state ? { value: state, label: settings.HomePage.getSelectData2().find(s => s.value === state)?.label } : null}
                            onChange={handleStateChange}
                            placeholder={settings.HomePage.select_placeholder1}
                            className="mt-1"
                        />

                        <FromBalise labelname={settings.HomePage.label_name5} inputType={settings.HomePage.from_tag_type_number}
                                    value={zipCode} onChange={(e) => setZipCode(e.target.value)}/>
                    </fieldset>
                </div>
                <Select
                    options={settings.HomePage.getSelectData1()}
                    value={department ? { value: department, label: settings.HomePage.getSelectData1().find(role => role.value === department)?.label } : null}
                    onChange={handleDepartmentChange}
                    placeholder={settings.HomePage.select_placeholder2}
                    className="mt-1"
                />
            </form>
            <div className="base-flex mt-1">
                <button onClick={saveNewEntries} className="link">Save</button>
            </div>
            <Modal isOpen={isModalOpen} style={customStyles}>
                <div className="w-full base-flex-end">
                    <button onClick={closeModal}>×</button>
                </div>
                <ValidationMessage message={settings.HomePage.validation_message}/>
            </Modal>
        </section>
    );
}

export default DatasFrom;
