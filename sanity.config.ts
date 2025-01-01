'use client'

/**
 * This configuration is used to for the Sanity Studio that’s mounted on the `\app\postify\[[...tool]]\page.tsx` route
 */

import {visionTool} from '@sanity/vision'
import {defineConfig} from 'sanity'
import {structureTool} from 'sanity/structure'

// Go to https://www.sanity.io/docs/api-versioning to learn how API versioning works
import {apiVersion, dataset, projectId} from './sanity/env'
import {schema} from './sanity/schemaTypes'
import {structure} from './sanity/structure'
import { markdownSchema } from 'sanity-plugin-markdown'

export default defineConfig({
  name: 'Postify',
  title: 'Postify',
  projectId,
  dataset,
  basePath: '/studio',
  // Add and edit the content schema in the './sanity/schemaTypes' folder
  schema,
  plugins: [
    structureTool({structure}),
    visionTool({defaultApiVersion: apiVersion}),
    markdownSchema(),
  ],
})
