import ClickDemo from './ClickDemo';
import BubblingDemo from './BubblingDemo';
import InputsDemo from './InputsDemo';
import SubmitDemo from './SubmitDemo';

export default function Materi03() {
    return (
        <>
            <h1>Event Handling</h1>

            <h2>1. onClick: cara menulis handler</h2>
            <ClickDemo />

            <h2>2. Event propagation</h2>
            <BubblingDemo />

            <h2>3. onChange: controlled input</h2>
            <InputsDemo />

            <h2>4. onSubmit dan preventDefault</h2>
            <SubmitDemo />
        </>
    );
}