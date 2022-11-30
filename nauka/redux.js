

Czym jest reducer, bo to jest chyba takie najbardziej skomplikowane  słowo w całym redux'ie. 
Reducer to nic innego jak taki kawałek dość  prostej logiki, który identyfikuje akcje po jej nazwie, 
czyli na przykład add note dodaje notatkę taka akcja add note leci do reducer a, reducer mówi okej,  ta akcja dodaje notatkę. 
To co muszę zrobić to muszę wejść do stanu  i dodać to co akcja mi wysłała, bo  akcja zawiera właśnie wszystkie informacje o tych notatkach 
i w reduxie właśnie jesteśmy zamknięci w takim trójkącie gdzie od store idziemy do komponentu.  
Wysyłamy tam różne dane. Z komponentu możemy wysyłać  akcje, które zawierają jakieś modyfikacje, 
ale same nie mogą  modyfikować niczego w naszym storze dlatego wysyłają te akcje dole do 
reducerów i dopiero reducery identyfikują te akcje i po identyfikacji  mogą działać na naszym storze, 
ważne jest też to że nas  store jest niemutowalny-  po prostu obiekty 
 tablice, wszystkie rzeczy, które się znajdują naszym storze, nie będą mutowane,  
 nie będą zmieniane tylko będą aktualizowane poprzez specjalne właśnie metody. 


const { createStore } = Redux;

// to jest tylko na pierwszy inicjalny raz kiedy reducer sie odpala i jest podawany do naszego stora
const initialState = {
    notes: [],
}

// myReducer jest funkcja przyjmujaca state i akcje
// state na samym poczatku kiedy tworzymy ta akcje nie istnieje dlatego musielismy podac initialState aby zapobiec bledom
const myReducer = (state = initialState, action) => {
        // w ten sposob konfigurujemy nasz reducer, mowimy jesli ta akcja bedzie do dodawania notatek,
        // to ma zrobic bardzo konkretna rzecz, ma zwrocic nam nowy state
        if(action.type ==='ADD_NOTE') {
            return {
    //jezeli chcemy dodac notatke to musimy powiedziec tutaj:zwroc mi tutaj tablice notes,
    // ktora bedzie zawierac state.notes czyli te wszystkie notatki, ktore do tej pory istnialy w naszym state,
    // a jako nastepna notatke, dodaj mi payload, czyli tę nowa notatke,ktora przyszla z nasza akcja i jak 
    // widzisz teraz obie totatki pojawily sie w naszym state- ale teraz tablice beda nam sie ciagle zagniezdzac,
    // dlatego przy kazdej operacji na naszym 'storze' musimy splaszczac te tablice za pomoca spread operatora czyli: ...state.notes
    // czyli wykorzystujemy spread operator na calym naszym state zwiazanym z notatkami
                notes: [
                    ...state.notes,
                    payload
                ]
            }
        }
}

// action zawieraja type i payload (to jest to co zawiera akcja,co chcemy przekazac do naszego stora:tutaj bedzie to tytul i content)
// w paylodzie wysylamy ksztalt naszej notatki czyli payload ma zawartosc tego co chcemy przekazac do stora,to co chcemy dodac
// i skoro nasz store przetrzymuje notatki to payloadem naszego NoteAction bedzie prosta notatka.
// Żeby wyslac notatke do naszego stora musielismy wykorzystac metode dispatch
const noteAction = {type: 'ADD_NOTE', payload:{title:'Hello Roman', content:'kjncjksdnckjsdncjnefiowfwicowefjiwfjweicni'}}

const store =  createStore(myReducer);

// poslugujac sie const store mamy dostep do kilku fajnych metod:
// store.dispatch - sluzy do wysylania akcji do reducera i teraz zanim ja wyslemy 
// dispatch przyjmuje jako argument nazwe akcji, ktora mamy wyslac do naszego reducera 

store.dispatch(noteAction);  // w momencie jak to zrobilismy to do reducera zostala podana nasza akcja. Podajac argument w postaci akcji
                            // do metody dispatch , ona wysyla to do reducera i mowi sluchaj mamy tutaj taka akcje, co my z nia dalej robimy
                            // i to wlasnie reducer jest odpowiedzialny za to co my dalej z nia zrobimy


// Akcje przechodza do reducera, ktore modyfikuja nasz store



// store.getState()