const data = [ 
    {
        heading: "Cat Campaign Details",
        count: "Cat Count",
        image: "./assets/cat-1.png"
    },
    {
        heading: "Cat Campaign Details",
        count: "Dog Count",
        image: "./assets/dog.png"
    },
    {
        heading: "Cat Campaign Details",
        count: "Cat Count",
        image: "./assets/cat-1.png"
    }
]

const bannerPets =(pet, catContainer) => {
    const bannerContainer = document.getElementById(catContainer);
    let bannerList ='';
    pet.forEach((item)=>{
        bannerList += ` <div class ="banner-card">
                                <div class="cat-design">
                            <img src="./assets/paw.png" alt ="cat-paw">
                            <img src="./assets/catdesign.png" alt= "catdesign">
                        </div>
                        <div class="cat-des">
                        <div class="cat1">
                            <div class="cat-h">
                                <p>${item.heading}</p>
                            </div>
                            <img src="./assets/line.png"  class ="line" alt="line">
                            <div class="cat-h2">
                                <p>Search anything you want</p>
                            </div>
                           </div>
                           <div class="cat2">
                                <div class="cat-2-1">
                                    <div class="cat-p">
                                        <p>${item.count}</p>
                                    </div>
                                    <div class="wrap-count">
                                        <img src="./assets/100.png" alt="100">
                                    </div>
                                </div>
                                <div class="cat-2-2">
                                    <div class="cat-p">
                                        <p>Revenue Generated</p>
                                    </div>
                                    <div class="aed-wrap">
                                        <img src="./assets/AED 2354.png" alt="aed">
                                    </div>
                                </div>
                           </div>
                        </div>
                        <div class="cat-wrap">
                            
                            <img src="${item.image}"  alt="cat1">
                        </div>
                        <div class="cat-design2">
                            <img src="./assets/catdesign2.png" alt= "catdesign2">
                        </div>       
                        </div>`
    })
    bannerContainer.innerHTML = bannerList;
}

bannerPets(data, 'cat-container');


const tabData = [ 
    {
        tabImage :"./assets/active-logo.png",
        title :"Active",
        percentage :"./assets/active100.png",
        status: "./assets/tab1status.png"
    },
    {
        tabImage :"./assets/pending.png",
        title :"Pending",
        percentage :"./assets/pending60.png",
        status: "./assets/tab2status.png"
    },
    {
        tabImage :"./assets/completed.png",
        title :"Completed",
        percentage :"/assets/completed90.png",
        status: "./assets/tab3status.png"
    }
]

const tabs = (tabContents, tabContainer)=> {
    const container = document.getElementById(tabContainer);
    let tabBox = '';
    tabContents.forEach((contents)=>{
        tabBox += `<div class="tab-a">
<div class="tab-box">
    <div class="tab-logo">
        <img src="${contents.tabImage}" alt="active-logo">
        <p>${contents.title}</p>
    </div>
    <div class="tab-status">
        <img src ="${contents.percentage}" alt ="stat">
        <img src ="${contents.status}" alt ="tabstat">
    </div>
</div>
</div>
</div>`
    })
    container.innerHTML = tabBox;
}
tabs(tabData, 'tab-container');


const revData = [ 
    {
        tabImage :"./assets/amount.png",
        title :"Total Income",
        aed :"./assets/amount-aed.png",
    },    
        
    {
        tabImage :"./assets/escrow.png",
        title :"Escrow Amount",
        aed :"./assets/escrow-aed.png",
       
    },
    {
        tabImage :"./assets/revenue.png",
        title :"This Month Revenue",
       aed :"./assets/revenue-aed.png",
       
    }
];

const rev = (tabContents, revenueContainer)=> {
    const container = document.getElementById(revenueContainer);
    let revBox = '';
    tabContents.forEach((content)=>{
        revBox += `<div class="rev-a">
<div class="rev-box">
    <div class="tab-logo">
        <img src="${content.tabImage}" alt="active-logo">
        <p>${content.title}</p>
    </div>
    <div class="tab-status">
        <img src ="${content.aed}" alt ="stat">  
    </div>
</div>
</div>`
    })
    container.innerHTML = revBox;
};
rev(revData, 'revenue-container');





