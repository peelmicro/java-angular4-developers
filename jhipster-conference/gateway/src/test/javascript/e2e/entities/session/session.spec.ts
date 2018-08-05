import { browser, protractor } from 'protractor';
import { NavBarPage } from './../../page-objects/jhi-page-objects';
import { SessionComponentsPage, SessionUpdatePage } from './session.page-object';

describe('Session e2e test', () => {
    let navBarPage: NavBarPage;
    let sessionUpdatePage: SessionUpdatePage;
    let sessionComponentsPage: SessionComponentsPage;

    beforeAll(() => {
        browser.get('/');
        browser.waitForAngular();
        navBarPage = new NavBarPage();
        navBarPage.getSignInPage().autoSignInUsing('admin', 'admin');
        browser.waitForAngular();
    });

    it('should load Sessions', () => {
        navBarPage.goToEntity('session');
        sessionComponentsPage = new SessionComponentsPage();
        expect(sessionComponentsPage.getTitle()).toMatch(/gatewayApp.session.home.title/);
    });

    it('should load create Session page', () => {
        sessionComponentsPage.clickOnCreateButton();
        sessionUpdatePage = new SessionUpdatePage();
        expect(sessionUpdatePage.getPageTitle()).toMatch(/gatewayApp.session.home.createOrEditLabel/);
        sessionUpdatePage.cancel();
    });

    it('should create and save Sessions', () => {
        sessionComponentsPage.clickOnCreateButton();
        sessionUpdatePage.setTitleInput('title');
        expect(sessionUpdatePage.getTitleInput()).toMatch('title');
        sessionUpdatePage.setDescriptionInput('description');
        expect(sessionUpdatePage.getDescriptionInput()).toMatch('description');
        sessionUpdatePage.setStartDateTimeInput('01/01/2001' + protractor.Key.TAB + '02:30AM');
        expect(sessionUpdatePage.getStartDateTimeInput()).toContain('2001-01-01T02:30');
        sessionUpdatePage.setEndDateTimeInput('01/01/2001' + protractor.Key.TAB + '02:30AM');
        expect(sessionUpdatePage.getEndDateTimeInput()).toContain('2001-01-01T02:30');
        sessionUpdatePage.save();
        expect(sessionUpdatePage.getSaveButton().isPresent()).toBeFalsy();
    });

    afterAll(() => {
        navBarPage.autoSignOut();
    });
});
