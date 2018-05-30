
import SamsSettings from './SamsSettings';
import SamsDriver from './SamsDriver';

/**
 * Global class for managing SAMS (Alice Shift Accounting management system)
 * This class is used for global control
 * @author H.J.M van der Heijden <h.j.m.van.der.heijden@hva.nl>
 * @
 */
export class Sams  {
    private _settings : SamsSettings;
    private _driver : SamsDriver;

    constructor(settings: SamsSettings, driver: SamsDriver) {
        this._settings = settings;
    }

    get settings  () : SamsSettings {
        return this._settings
    }


}

export default Sams;