import { createRouter, createWebHistory } from "vue-router";
import AddedAnnouncement from '../views/AddedAnnouncement.vue';
import AddChoices from '../components/AddChoices.vue';

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: "/",
            name: "main page",
            component: AddedAnnouncement
        },
        {
            path: "/Add-Announcement",
            name: "Add Announcement",
            component: AddChoices
        }
    ]
})
export default router;