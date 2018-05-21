let multiSelect = `
<div class="dropdown-con">
    <ul class="drop-cate-list">
        <li v-for="(index,item) in items" :data-id="item.ID" @mouseenter="hover(index)" :class="{ active: index == showIndex }">
            <a href="javascript:">
                <span class="z-icons" :class="'z-icon-' + item.url_nicktitle"></span> {{item.title}}
            </a>
        </li>
    </ul>
    <div class="dropdown-r">
        <div v-for="(index,tempItem) in items" class="drop-cate-wrap" :style="{ display: index == showIndex ? 'block':'none' }">
            <table class="drop-menus">
                <tbody>
                <tr v-for="(index2,children) in tempItem.child">
                    <td class="drop-menu-title" @click="choseAllItem(index,index2)" :class="{ 'category-selected': children.isActive }">
                        <a href="javascript:" :data-id="children.ID">{{children.title}}</a><span class="split"></span>
                    </td>
                    <td class="drop-menu-items">
                        <a href="javascript:" v-for="(index3,nodes) in children.child" :data-id="nodes.ID" @click="choseItem(index, index2, index3)"
                           :class="{ 'category-selected': nodes.isActive||children.isActive}">{{nodes.title}}</a>
                    </td>
                </tr>
                </tbody>
            </table>
        </div>
    </div>
</div>
`;