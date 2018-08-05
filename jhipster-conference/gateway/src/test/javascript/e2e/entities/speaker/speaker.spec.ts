import { browser } from 'protractor';
import { NavBarPage } from './../../page-objects/jhi-page-objects';
import { SpeakerComponentsPage, SpeakerUpdatePage } from './speaker.page-object';

describe('Speaker e2e test', () => {
    let navBarPage: NavBarPage;
    let speakerUpdatePage: SpeakerUpdatePage;
    let speakerComponentsPage: SpeakerComponentsPage;

    beforeAll(() => {
        browser.get('/');
        browser.waitForAngular();
        navBarPage = new NavBarPage();
        navBarPage.getSignInPage().autoSignInUsing('admin', 'admin');
        browser.waitForAngular();
    });

    it('should load Speakers', () => {
        navBarPage.goToEntity('speaker');
        speakerComponentsPage = new SpeakerComponentsPage();
        expect(speakerComponentsPage.getTitle()).toMatch(/gatewayApp.speaker.home.title/);
    });

    it('should load create Speaker page', () => {
        speakerComponentsPage.clickOnCreateButton();
        speakerUpdatePage = new SpeakerUpdatePage();
        expect(speakerUpdatePage.getPageTitle()).toMatch(/gatewayApp.speaker.home.createOrEditLabel/);
        speakerUpdatePage.cancel();
    });

    it('should create and save Speakers', () => {
        speakerComponentsPage.clickOnCreateButton();
        speakerUpdatePage.setFirstNameInput('firstName');
        expect(speakerUpdatePage.getFirstNameInput()).toMatch('firstName');
        speakerUpdatePage.setLastNameInput('lastName');
        expect(speakerUpdatePage.getLastNameInput()).toMatch('lastName');
        speakerUpdatePage.setEmailInput('email');
        expect(speakerUpdatePage.getEmailInput()).toMatch('email');
        speakerUpdatePage.setTwiterInput('twiter');
        expect(speakerUpdatePage.getTwiterInput()).toMatch('twiter');
        speakerUpdatePage.setBioInput('bio');
        expect(speakerUpdatePage.getBioInput()).toMatch('bio');
        // speakerUpdatePage.sessionsSelectLastOption();
        speakerUpdatePage.save();
        expect(speakerUpdatePage.getSaveButton().isPresent()).toBeFalsy();
    });

    afterAll(() => {
        navBarPage.autoSignOut();
    });
});
