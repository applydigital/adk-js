/**
 * @license
 * Copyright 2026 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */

import {InMemoryArtifactService} from '@google/adk';
import {describe} from 'vitest';
import {
  runArtifactServiceTests,
  runFileDataArtifactServiceTests,
} from './artifact_service_test_utils.js';

describe('InMemoryArtifactService', () => {
  runArtifactServiceTests(
    async () => new InMemoryArtifactService(),
    async () => {},
  );

  runFileDataArtifactServiceTests(
    async () => new InMemoryArtifactService(),
    async () => {},
  );
});
