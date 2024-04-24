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
    const [firstData, setFirstData] = useState('');
    const [secondData, setSecondData] = useState('');
    const [selectDate, setSelectDate] = useState(null);
    const [selectDate2, setSelectDate2] = useState(null);
    const [thirdData, setThirdData] = useState('');
    const [fourthData, setFourthData] = useState('');
    const [fifthData, setFifthData] = useState('');
    const [sixthData, setSixthData] = useState('');
    const [seventhData, setSeventhData] = useState('');

    const [errorMessage, setErrorMessage] = useState('');
    const [isModalOpen, setIsModalOpen] = useState(false);

    const saveNewEntries = () => {
        setErrorMessage('');

        if (!firstData || !secondData || !selectDate ||
            !selectDate2 || !thirdData || !fourthData || !fifthData || !sixthData || !seventhData) {
            setErrorMessage("Please complete all fields");
            return;
        }
        setIsModalOpen(true);

        const newEntries = {
            firstData,
            secondData,
            selectDate: selectDate ? selectDate.format('YYYY-MM-DD') : '',
            selectDate2: selectDate2 ? selectDate2.format('YYYY-MM-DD') : '',
            fieldsetValue: {
                thirdData,
                fourthData,
                fifth: settings.HomePage.getSelectDataByAbbreviation(fifthData),
                fifthData,
                sixthData
            },
            seventhData,
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
        setFifthData(selectedOption ? selectedOption.value : '');
    };

    const handleDepartmentChange = selectedOption => {
        setSeventhData(selectedOption ? selectedOption.value : '');
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
                                    value={firstData}
                                    onChange={(e) => setFirstData(e.target.value)}/>
                        <FromBalise labelname={settings.HomePage.label_name2}
                                    inputType={settings.HomePage.from_tag_type_text}
                                    value={secondData}
                                    onChange={(e) => setSecondData(e.target.value)}/>
                        <DatePicker placeholder={settings.HomePage.date_picker_placeholder1}
                                    value={selectDate}
                                    onChange={(date) => setSelectDate(date)}
                                    format={settings.HomePage.date_picker_format}/>
                        <DatePicker placeholder={settings.HomePage.date_picker_placeholder2}
                                    value={selectDate2}
                                    onChange={(date) => setSelectDate2(date)}
                                    format={settings.HomePage.date_picker_format}/>
                    </div>
                    <fieldset>
                        <Legend legendTitle={settings.HomePage.fieldset_title}/>
                        <FromBalise labelname={settings.HomePage.label_name3}
                                    inputType={settings.HomePage.from_tag_type_text}
                                    value={thirdData} onChange={(e) => setThirdData(e.target.value)}/>
                        <FromBalise labelname={settings.HomePage.label_name4}
                                    inputType={settings.HomePage.from_tag_type_text}
                                    value={fourthData} onChange={(e) => setFourthData(e.target.value)}/>

                        <Select
                            options={settings.HomePage.getSelectData2()}
                            value={fifthData ? { value: fifthData, label: settings.HomePage.getSelectData2().find(s => s.value === fifthData)?.label } : null}
                            onChange={handleStateChange}
                            placeholder={settings.HomePage.select_placeholder1}
                            className="mt-1"
                        />

                        <FromBalise labelname={settings.HomePage.label_name5} inputType={settings.HomePage.from_tag_type_number}
                                    value={sixthData} onChange={(e) => setSixthData(e.target.value)}/>
                    </fieldset>
                </div>
                <Select
                    options={settings.HomePage.getSelectData1()}
                    value={seventhData ? { value: seventhData, label: settings.HomePage.getSelectData1().find(role => role.value === seventhData)?.label } : null}
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
