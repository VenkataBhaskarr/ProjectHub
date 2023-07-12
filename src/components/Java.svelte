<script>
    import {db} from '../firebase/config.js'
import {collection , addDoc , onSnapshot } from 'firebase/firestore';
import {onMount} from "svelte";
    import axios from "axios";


let messages = [];
let currentMessage = '';
let check = false;
let countCheck = true
let initialMessage = 'loading ...';
let mainQuestion = 'loading';

    onMount(() => {
        axios.get('https://python-secret.onrender.com/util/java')
            .then(function (response) {

                mainQuestion = response.data;
            })
    })

    onMount(async () => {
        const unsub = onSnapshot(collection(db, "javacollect"), (snap) => {
            snap.docChanges().forEach((change) => {
                if (change.type === "added") {
                    const doc = change.doc;
                        // console.log(doc.data().text);
                        messages.push(doc.data().text);
                        messages = [...messages];
                        check = true;
                }
            });

        });
    })


const sendmessage = async () => {
    const docRef = await addDoc(collection(db, "javacollect"), {
        text: currentMessage
    });
    console.log("Document written with ID: ", docRef.id);
    currentMessage = '';
}


</script>

<div>
    <div class="flex flex-col items-center">
        <div class="w-11/12 ">
            <div class="card-container border-2 bg-white rounded-lg shadow-md p-6 h-64  overflow-y-auto border-b-amber-950">
                 <!--paste random text here-->
                {mainQuestion}
            </div>
        </div>
        <div class="chat-content p-6 h-96 w-11/12 overflow-y-auto bg-gray-100 rounded-lg shadow-md">
        <div>
            <div>
                {#if check}
                    {#each messages as message}
                        <div class="w-full">
                            <span>
                                 <button class="rounded-full w-10 h-10 border-4 border-blue-700">
                               P
                            </button>
                            </span>
                            <span class="bg-white rounded-sm shadow-md mb-3.5 p-1">
                            {message}
                            </span>
                        </div>
                    {/each}
                {:else}
                    <p>loading...</p>
                {/if}
            </div>
        </div>
        </div>
        <div>
            <span>
                <input type="text" bind:value={currentMessage} class="w-96"/>
            </span>
            <span>
               <button on:click={sendmessage}>Send</button>
            </span>
        </div>

    </div>
</div>

