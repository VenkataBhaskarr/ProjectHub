<script>
    // importing required dependencies
  import Content from "./components/Content.svelte"
  import Java from "./components/Java.svelte"
    import MachineLearning from "./components/Macdev.svelte";
    import MobileAppDevelopment from "./components/Mobdev.svelte";
    import WebDevelopment from "./components/Webdev.svelte";
 import {Router, Link , Route, navigate} from "svelte-routing"

    // main logic starts from here

    let j = 0
    let m = 0
    let w = 0
    let l = 0
const java = () => {
     j=1
     m=0
    w=0
    l=0
    navigate("/java")
}
const mobdev = () => {
    j=0
    m=1
    w=0
    l=0
    navigate("/mobileappdevelopment")
}
const webdev = () => {
    j=0
    m=0
    w=1
    l=0
    navigate("/webdevelopment")
}
const macdev = () => {
    j=0
    m=0
    w=0
    l=1
    navigate("/machinelearning")
}

</script>

<div class="mt-6">
    <div class="flex justify-center text-indigo-700 text-4xl font-bold">
        VIT Project Hub
    </div>
    <div class="midpage pt-5">
        <div class="flex text-center justify-center link">
            <button on:click={java} class:active={j>0}>
                Java
            </button>
            <button on:click={mobdev} class:active={m>0}>
                Mobile App Development
            </button>

            <button on:click={webdev} class:active={w>0}>
                Web Development
            </button>
<!--            <Link to="/webdev" activeClassName="active">About</Link>-->
            <button on:click={macdev} class:active={l>0}>
                Machine Learning
            </button>
        </div>
    </div>
    <div class="main component">
        <div>
          <Router>
                <Route path="/" component={Content}/>
                <Route path="/java" component={Java}/>
                <Route path="/machinelearning" component={MachineLearning}/>
                <Route path="/mobileappdevelopment" component={MobileAppDevelopment}/>
                <Route path="/webdevelopment" component={WebDevelopment}/>
          </Router>
        </div>
    </div>
</div>

<style>
   .active{
       background-color: royalblue;
       color: #f9f9f9;
   }
    button{
        background-color: #f5f5f5;
        border: 2px solid #f5f5f5;
        border-radius: 8px;
        padding: 5px;
        margin: 5px;
        cursor: pointer;
        transition: background-color 0.6s ease;
    }
    button:hover{
        background-color: royalblue;
        color: #f9f9f9;
        transition-delay: 10ms;
    }
</style>