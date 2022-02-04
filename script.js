class MyHeader extends HTMLElement
{
    connectedCallback()
    {
        this.innerHTML = `
        <header>
        <div id="container">
        <!-- SHOP NAME -->
        <div id="shopName"><a href="index.html"> <b>SHOP</b>LANE </a></div>
            <!-- COLLCETIONS ON WEBSITE -->
            <div id="collection">
                <div id="clothing">
                <ul >
                    <li style="list-style:none;">
                    <div class="dropdown">
                        <button class="dropbtn"> CATEGORY</button>
                        <div class="dropdown-content">
                          <a href="men.html">Men</a>
                          <a href="women.html">Women</a>
                         
                        </div>
                      </div>
                      
                </li>
                
                </ul>
                </div>
                <div id="accessories"><a href="index.html"> &nbsp;&nbsp;&nbsp;&nbsp;Home </a></div>
                
            </div>
            <!-- SEARCH SECTION -->
            <div id="search">
                <i class="fas fa-search search"></i>
                <input type="text" id="input" name="searchBox" placeholder="Search for Clothing and Accessories">
            </div>
            <!-- USER SECTION (CART AND USER ICON)--->
            <div>
                <a href="#" class="user"> <i class="fas fa-shopping-cart addedToCart" aria-hidden="true"><div id="badge"> 0 </div></i></a>
                <a href="modal.html" class="user"> <i class="fas fa-user-circle userIcon"></i> </a>
            </div> 
            
    </div>
        </header>
        `
    }
}

customElements.define('my-header',MyHeader)

class MyFooter extends HTMLElement
{
    connectedCallback()
    {
        this.innerHTML = `
        <div id="containerFooter">
            <div id="credit">© Samriti </div>
            <img src="images/card_img.png" class="image">
            </div>
        `
    }
}

customElements.define('my-footer',MyFooter)

