//this is the reducers.js in the server folder
//
import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import { reducer as toastrReducer } from 'react-redux-toastr';
import { reducer as modalReducer } from 'react-redux-modal';
import { reducer as authReducer } from 'redux-auth';
import { reducer as apiaryReducer } from './reducers/apiary';
import { reducer as beeReducer } from './reducers/bee';
import { reducer as hiveReducer } from './reducers/hive';
import { reducer as inspectionReducer } from './reducers/inspection';
import { reducer as userReducer } from './reducers/user';
import { reducer as weatherReducer } from './reducers/weather';
import { reducer as hiveTypeReducer } from './reducers/hiveType';
import { reducer as hiveStatusReducer } from './reducers/hiveStatus';
import { reducer as hiveConditionReducer } from './reducers/hiveCondition';
import { reducer as hiveTreatmentReducer } from './reducers/hiveTreatment';
import { reducer as hiveTreatmentTypeReducer } from './reducers/hiveTreatmentType';
import { reducer as hiveTreatmentStatusReducer } from './reducers/hiveTreatmentStatus';
import { reducer as hiveTreatmentReasonReducer } from './reducers/hiveTreatmentReason';
import { reducer as hiveTreatmentMethodReducer } from './reducers/hiveTreatmentMethod';
import { reducer as hiveTreatmentProductReducer } from './reducers/hiveTreatmentProduct';
import { reducer as hiveTreatmentProductTypeReducer } from './reducers/hiveTreatmentProductType';
import { reducer as hiveTreatmentProductStatusReducer } from './reducers/hiveTreatmentProductStatus';
import { reducer as hiveTreatmentProductUnitReducer } from './reducers/hiveTreatmentProductUnit';
import { reducer as hiveTreatmentProductDoseUnitReducer } from './reducers/hiveTreatmentProductDoseUnit';
import { reducer as hiveTreatmentProductDoseTypeReducer } from './reducers/hiveTreatmentProductDoseType';
import { reducer as hiveTreatmentProductDoseMethodReducer } from './reducers/hiveTreatmentProductDoseMethod';
import { reducer as hiveTreatmentProductDoseReducer } from './reducers/hiveTreatmentProductDose';
import { reducer as hiveTreatmentProductDoseStatusReducer } from './reducers/hiveTreatmentProductDoseStatus';
import { reducer as hiveTreatmentProductDoseReasonReducer } from './reducers/hiveTreatmentProductDoseReason';
import { reducer as hiveTreatmentProductDoseApplicationMethodReducer } from './reducers/hiveTreatmentProductDoseApplicationMethod';
import { reducer as hiveTreatmentProductDoseApplicationMethodStatusReducer } from './reducers/hiveTreatmentProductDoseApplicationMethodStatus';
import { reducer as hiveTreatmentProductDoseApplicationMethodReasonReducer } from './reducers/hiveTreatmentProductDoseApplicationMethodReason';
import { reducer as hiveTreatmentProductDoseApplicationMethodTypeReducer } from './reducers/hiveTreatmentProductDoseApplicationMethodType';
import { reducer as hiveTreatmentProductDoseApplicationMethodUnitReducer } from './reducers/hiveTreatmentProductDoseApplicationMethodUnit';
import { reducer as hiveTreatmentProductDoseApplicationMethodApplicationTypeReducer } from './reducers/hiveTreatmentProductDoseApplicationMethodApplicationType';
import { reducer as hiveTreatmentProductDoseApplicationMethodApplicationTypeStatusReducer } from './reducers/hiveTreatmentProductDoseApplicationMethodApplicationTypeStatus';
import { reducer as hiveTreatmentProductDoseApplicationMethodApplicationTypeReasonReducer } from './reducers/hiveTreatmentProductDoseApplicationMethodApplicationTypeReason';
import { reducer as hiveTreatmentProductDoseApplicationMethodApplicationTypeTypeReducer } from './reducers/hiveTreatmentProductDoseApplicationMethodApplicationTypeType';

const rootReducer = combineReducers({
    form: formReducer,
    toastr: toastrReducer,
    modal: modalReducer,
    auth: authReducer,
    apiary: apiaryReducer,
    bee: beeReducer,
    hive: hiveReducer,
    inspection: inspectionReducer,
    user: userReducer,
    weather: weatherReducer,
    hiveType: hiveTypeReducer,
    hiveStatus: hiveStatusReducer,
    hiveCondition: hiveConditionReducer,
    hiveTreatment: hiveTreatmentReducer,
    hiveTreatmentType: hiveTreatmentTypeReducer,
    hiveTreatmentStatus: hiveTreatmentStatusReducer,
    hiveTreatmentReason: hiveTreatmentReasonReducer,
    hiveTreatmentMethod: hiveTreatmentMethodReducer,
    hiveTreatmentProduct: hiveTreatmentProductReducer,
    hiveTreatmentProductType: hiveTreatmentProductTypeReducer,
    hiveTreatmentProductStatus: hiveTreatmentProductStatusReducer,
    hiveTreatmentProductUnit: hiveTreatmentProductUnitReducer,
    hiveTreatmentProductDoseUnit: hiveTreatmentProductDoseUnitReducer,
    hiveTreatmentProductDoseType: hiveTreatmentProductDoseTypeReducer,
    hiveTreatmentProductDoseMethod: hiveTreatmentProductDoseMethodReducer,
    hiveTreatmentProductDose: hiveTreatmentProductDoseReducer,
    hiveTreatmentProductDoseStatus: hiveTreatmentProductDoseStatusReducer,
    hiveTreatmentProductDoseReason: hiveTreatmentProductDoseReasonReducer,
    hiveTreatmentProductDoseApplicationMethod: hiveTreatmentProductDoseApplicationMethodReducer,
    hiveTreatmentProductDoseApplicationMethodStatus: hiveTreatmentProductDoseApplicationMethodStatusReducer,
    hiveTreatmentProductDoseApplicationMethodReason: hiveTreatmentProductDoseApplicationMethodReasonReducer,
    hiveTreatmentProductDoseApplicationMethodType: hiveTreatmentProductDoseApplicationMethodTypeReducer,
    hiveTreatmentProductDoseApplicationMethodUnit: hiveTreatmentProductDoseApplicationMethodUnitReducer,
    hiveTreatmentProductDoseApplicationMethodApplicationType: hiveTreatmentProductDoseApplicationMethodApplicationTypeReducer,
    hiveTreatmentProductDoseApplicationMethodApplicationTypeStatus: hiveTreatmentProductDoseApplicationMethodApplicationTypeStatusReducer,
    hiveTreatmentProductDoseApplicationMethodApplicationTypeReason: hiveTreatmentProductDoseApplicationMethodApplicationTypeReasonReducer,
    hiveTreatmentProductDoseApplicationMethodApplicationTypeType: hiveTreatmentProductDoseApplicationMethodApplicationTypeTypeReducer
});

export default rootReducer;

