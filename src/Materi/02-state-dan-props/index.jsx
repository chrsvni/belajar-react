import Counter from "./Counter";
import ProfileForm from "./ProfileForm";
import TodoApp from './TodoApp';

export default function Materi02() {
    return (
        <>
            <h1>State dan Props</h1>

            <h2>1. useState: angka</h2>
            <Counter />

            <h2>2. useState: object</h2>
            <ProfileForm />

            <h2>3. Komunikasi antar komponen</h2>
            <TodoApp />
        </>
    );
}