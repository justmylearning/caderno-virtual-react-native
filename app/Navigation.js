export default class Navigation{
    static navigation = null;

    static setNavigation(navigation){
        Navigation.navigation = navigation;
    }

    static getNavigation(){
        return Navigation.navigation;
    }
}