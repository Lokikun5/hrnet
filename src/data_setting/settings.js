import employee_role from "../datas/employee-role";
import states from "../datas/states";

const settings = {
    HomePage: {
        page_title: "HRnet",
        link_name: "View Current Employees",
        section_title: "Create Employee",

        from_tag_type_text: "text",
        from_tag_type_number: "number",

        label_name1: "First Name",
        label_name2: "Last Name",

        date_picker_format: "YYYY-MM-DD",
        date_picker_placeholder1:"Date of Birth",
        date_picker_placeholder2:"Start Date",

        fieldset_title: "Address",

        label_name3: "Street",
        label_name4: "City",
        select_placeholder1: "Select State",
        label_name5: "Zip code",
        select_placeholder2: "Select Department",
        getSelectData1: () => employee_role.map(role => ({ value: role.role, label: role.role })),
        getSelectData2: () => states.map(state => ({ value: state.abbreviation, label: state.name })),
        getSelectDataByAbbreviation: (abbreviation) => {
            const state = states.find(s => s.abbreviation === abbreviation);
            return state ? state.name : '';
        },
        validation_message: `The employee has been validated!`
    },
    DatasList: {
        page_title: "Current Employees",
        link_name: "Home",

        th_title1: "First Name",
        th_title2: "Last Name",
        th_title3: "Date of Birth",
        th_title4: "Department",
        th_title5: "Start Date",
        th_title6: "Street",
        th_title7: "City",
        th_title8: "State",
        th_title9: "Zip Code",
    }

};

export default settings;
