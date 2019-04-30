import {expectType} from 'tsd';
import parentModule = require('.');

expectType<string | undefined>(parentModule());
expectType<string | undefined>(parentModule('foo'));
