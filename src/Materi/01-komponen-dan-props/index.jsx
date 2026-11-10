import WelcomeClass from './WelcomeClass';
import WelcomeFn from './WelcomeFn';

export default function Materi01() {
    return (
        <>
            <h1>Komponen dan Props</h1>
            <WelcomeClass name="Andi" />
            <WelcomeClass name="Sinta" />
            <WelcomeFn name="Dewi" />
        </>
    );
}