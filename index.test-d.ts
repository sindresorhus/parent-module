import {expectType} from 'tsd';
import parentModule from './index.js';

expectType<string | undefined>(parentModule());
expectType<string | undefined>(parentModule('foo'));
