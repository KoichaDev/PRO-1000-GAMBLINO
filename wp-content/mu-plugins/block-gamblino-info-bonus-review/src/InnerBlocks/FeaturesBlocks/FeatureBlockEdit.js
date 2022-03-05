// WP Components
import Header from "./components/Header";

const BlockEditTeamMember = ({ attributes, setAttributes }) => {
    return (
        <>
            <Header {...attributes} setAttributes={setAttributes} />
        </>
    );
};

export default BlockEditTeamMember;
